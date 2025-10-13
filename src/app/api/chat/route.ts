import { NextResponse } from 'next/server';
import { Index } from 'faiss-node';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Gets a vector embedding for a single text chunk from the local API.
 */
async function getEmbedding(text: string, embeddingUrl: string): Promise<number[] | null> {
    try {
        const response = await fetch(embeddingUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'text-embedding-granite-embedding-278m-multilingual',
                input: text,
            }),
        });
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`[Chat API] Embedding API error: ${response.status}`, errorBody);
            return null;
        }
        const data = await response.json();
        if (data?.data?.[0]?.embedding) {
            return data.data[0].embedding;
        }
        console.error('[Chat API] Invalid embedding response structure:', data);
        return null;
    } catch (error: any) {
        console.error(`[Chat API] Failed to get embedding for query. Error: ${error.message}`);
        return null;
    }
}

// Instruction for generating follow-up questions (C35)
const suggestionInstruction = `
Finally, after your main response, generate 2-4 short, relevant follow-up questions the user might want to ask next based on this conversation. Output them strictly as a JSON array of strings wrapped in specific delimiters like this:
:::suggestions:::["Question 1?", "Question 2?"]:::end_suggestions:::
Do not include any text outside of the JSON array within these delimiters.`;

// C38: New explicit markdown formatting instructions
const markdownFormattingInstruction = `
Use standard GitHub Flavored Markdown for all formatting.
- For lists, use compact formatting. Each list item should be a single, compact line without extra blank lines between items or within a single item. For example, write "1. First item" instead of "1. First item\n\n   More text.".
- For inline code, use single backticks, for example: \`DCE.vsix\`. Do not add blank lines before or after inline code.
- For multi-line code blocks, use triple backticks with a language identifier.
- Avoid using HTML tags like <kbd>. Use markdown alternatives, like backticks for commands.
`;

// System prompts defined as per A27, updated in C35 for dynamic suggestions, and C38 for formatting
const systemPrompts = {
    dce: `You are @Ascentia, an AI guide for the aiascent.dev website. Your purpose is to answer questions about the Data Curation Environment (DCE), the 'Citizen Architect' methodology, and the 'Process as Asset' whitepaper.

Your answers should be based *only* on the provided context chunks from the project's official documentation. Be helpful, encouraging, and aim to increase the user's understanding of the project.

If the answer isn't directly in the context, state that, but still try to provide related information if available. Use markdown for formatting as described below to enhance clarity. Do not invent information.
${markdownFormattingInstruction}
${suggestionInstruction}`,
    report: `You are @Ascentia, an AI guide for "The Ascent Report" on the aiascent.dev website. Your purpose is to act as a subject matter expert, answering questions based *only* on the provided context from the report. The report covers topics like the AI industry's labor model, the 'fissured workplace,' cognitive security (COGSEC), and geopolitical strategy.

Your answers must be grounded in the provided context chunks. Be helpful, concise, and stay on topic.

If the answer isn't directly in the context, state that, but you can offer to discuss related concepts that *are* in the context. Use markdown for formatting as described below. Do not invent information or use outside knowledge.
${markdownFormattingInstruction}
${suggestionInstruction}`
};


export async function POST(request: Request) {
  const { prompt, pageContext, knowledgeBase = 'report' } = await request.json();
  const kbIdentifier = (knowledgeBase === 'dce' || knowledgeBase === 'report') ? knowledgeBase as keyof typeof systemPrompts : 'report';

  const llmUrl = process.env.REMOTE_LLM_URL;
  const embeddingUrl = process.env.EMBEDDING_API_URL;

  if (!llmUrl || !embeddingUrl) {
    const errorMessage = 'AI endpoints not configured. Set REMOTE_LLM_URL and EMBEDDING_API_URL in .env.local';
    console.error(`[Chat API] ${errorMessage}`);
    return new NextResponse(errorMessage, { status: 500 });
  }

  let retrievedContext = '';
  let retrievedDocsLog = 'No documents retrieved.';
  try {
    const faissFile = `${kbIdentifier}_faiss.index`;
    const chunksFile = `${kbIdentifier}_chunks.json`;

    const publicPath = path.join(process.cwd(), 'public');
    const faissPath = path.join(publicPath, 'data', 'embeddings', faissFile);
    const chunksPath = path.join(publicPath, 'data', 'embeddings', chunksFile);

    const faissExists = await fs.stat(faissPath).then(() => true).catch(() => false);
    const chunksExist = await fs.stat(chunksPath).then(() => true).catch(() => false);

    if (!faissExists || !chunksExist) {
        const errorMessage = `Embedding files for knowledge base '${kbIdentifier}' not found. Please ensure '${faissFile}' and '${chunksFile}' are in 'public/data/embeddings/'.`;
        console.error(`[Chat API] RAG Error: ${errorMessage}`);
        retrievedContext = `RAG system failed: ${errorMessage}`;
    } else {
        const index = Index.read(faissPath);
        const chunks = JSON.parse(await fs.readFile(chunksPath, 'utf-8'));
        
        const queryEmbedding = await getEmbedding(prompt, embeddingUrl);

        if (queryEmbedding && index.getDimension() === queryEmbedding.length) {
            const { labels, distances } = index.search(queryEmbedding, 6);
            
            if (labels.length > 0) {
                const results = labels.map((labelIndex: number) => chunks[labelIndex]?.chunk).filter(Boolean);
                retrievedContext = results.join('\n\n---\n\n');
                retrievedDocsLog = `Retrieved ${results.length} documents from '${kbIdentifier}' KB:\n${results.map((doc, i) => `  Doc ${i+1} (Dist: ${distances[i].toFixed(4)}): "${doc.substring(0, 80)}..."`).join('\n')}`;
            }
        } else if (!queryEmbedding) {
            retrievedContext = "RAG system failed: Could not generate embedding for the query.";
            retrievedDocsLog = "RAG Error: Could not generate embedding for the query.";
        } else {
            const errorMessage = `Embedding dimension mismatch for '${kbIdentifier}' KB. Index: ${index.getDimension()}, Query: ${queryEmbedding.length}. Please regenerate embeddings.`;
            console.error(`[Chat API] RAG Error: ${errorMessage}`);
            retrievedContext = `RAG system failed: ${errorMessage}`;
            retrievedDocsLog = `RAG Error: ${errorMessage}`;
        }
    }
  } catch (error: any) {
    console.error(`[Chat API] RAG Error for '${kbIdentifier}' KB: Could not load vector store or retrieve documents.`, error);
    retrievedContext = `RAG system failed: ${error.message}.`;
    retrievedDocsLog = `RAG Error: ${error.message}`;
  }

  console.log(`[Chat API] RAG Diagnostic for prompt: "${prompt}" using KB: '${kbIdentifier}'`);
  console.log(`[Chat API] ${retrievedDocsLog}`);

  const completionsUrl = `${llmUrl}/v1/completions`;
  const systemPrompt = systemPrompts[kbIdentifier];

  const finalPrompt = `
System: ${systemPrompt}

--- START CONTEXT ---

[Retrieved Chunks from Knowledge Base]
${retrievedContext}

[Current Page Context]
${pageContext}
--- END CONTEXT ---

User: ${prompt}

Ascentia:`;

  const controller = new AbortController();
  // C37: Increased timeout to 300 seconds (5 minutes) for model cold starts
  const timeoutId = setTimeout(() => controller.abort(), 300000);

  try {
    const response = await fetch(completionsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'unsloth/gpt-oss-20b',
        prompt: finalPrompt,
        max_tokens: 4096,
        temperature: 0.7,
        stream: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`[Chat API] LLM server error: ${response.status} ${response.statusText}`, errorBody);
        return new NextResponse(`Error from LLM service: ${errorBody}`, { status: response.status });
    }

    if (!response.body) {
      return new NextResponse("LLM response has no body", { status: 500 });
    }

    return new Response(response.body, {
        headers: { 
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
         },
    });

  } catch (error: any) {
    clearTimeout(timeoutId);
    // C17: Enhanced error handling for connection issues
    if (error.name === 'AbortError') {
        const debugMessage = `Connection timed out. TROUBLESHOOTING: 1. Verify the LMStudio server is running. 2. Check firewall on the host machine (${llmUrl}) for port 1234. 3. Ensure LMStudio is started with '--host 0.0.0.0'.`;
        console.error(`[Chat API] Request to LLM server timed out. ${debugMessage}`);
        return new NextResponse(`Error: Connection to the AI service timed out. ${debugMessage}`, { status: 504 });
    }

    if (error instanceof TypeError && error.message.includes('fetch failed')) {
        const debugMessage = `Network connection failed. TROUBLESHOOTING: 1. Verify the LMStudio server is running. 2. Double-check the IP/port in .env.local. 3. Check firewall on the host machine (${llmUrl}) for port 1234.`;
        console.error(`[Chat API] Network error: Could not connect to LLM server. ${debugMessage}`);
        return new NextResponse(`Error: Could not connect to the AI service. ${debugMessage}`, { status: 502 });
    }

    console.error('[Chat API] Error proxying chat request:', error);
    return new NextResponse(`Error proxying chat request: ${error.message}`, { status: 500 });
  }
}