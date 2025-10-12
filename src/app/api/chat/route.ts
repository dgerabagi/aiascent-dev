import { NextResponse } from 'next/server';
import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { OpenAIEmbeddings } from '@langchain/openai';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { prompt, pageContext } = await request.json();

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
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: 'not-needed',
      configuration: {
        baseURL: embeddingUrl,
      },
    });

    const publicPath = path.join(process.cwd(), 'public');
    const faissPath = path.join(publicPath, 'data', 'embeddings', 'report_faiss.index');
    const chunksPath = path.join(publicPath, 'data', 'embeddings', 'report_chunks.json');

    try {
      await fs.stat(faissPath);
      await fs.stat(chunksPath);
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            console.error('[Chat API] RAG Error: Embedding files not found. Please place `report_faiss.index` and `report_chunks.json` in `public/data/embeddings/`.');
            retrievedContext = "RAG system failed: Could not load embedding files.";
        } else {
            console.error(`[Chat API] RAG Error: Could not stat embedding files. Error: ${e.message}`);
            retrievedContext = `RAG system failed: ${e.message}.`;
        }
    }

    if (!retrievedContext) {
        const vectorStore = await FaissStore.load(faissPath, embeddings);
        const retriever = vectorStore.asRetriever(3);
        const results = await retriever.invoke(prompt);
        retrievedContext = results.map(doc => doc.pageContent).join('\n\n---\n\n');
        retrievedDocsLog = `Retrieved ${results.length} documents:\n${results.map((doc, i) => `  Doc ${i+1}: "${doc.pageContent.substring(0, 100)}..."`).join('\n')}`;
    }

  } catch (error: any) {
    console.error('[Chat API] RAG Error: Could not load vector store or retrieve documents.', error);
    retrievedContext = `RAG system failed: ${error.message}.`;
    retrievedDocsLog = `RAG Error: ${error.message}`;
  }

  // C21: Enhanced logging to debug RAG
  console.log(`[Chat API] RAG Diagnostic for prompt: "${prompt}"`);
  console.log(`[Chat API] ${retrievedDocsLog}`);


  const completionsUrl = `${llmUrl}/v1/completions`;
  const systemPrompt = `You are @Ascentia, an AI guide for "The Ascent Report". Your purpose is to answer questions based *only* on the provided context from the report. Be helpful, concise, and stay on topic.
First, consider the 'Retrieved Chunks' which have high relevance to the user's question. After that, consider the 'Current Page Context' for supplementary information.
Do not invent information. If the answer is not in the context, clearly state "That information is not available in the provided context."`;

  const finalPrompt = `
System: ${systemPrompt}

--- START CONTEXT ---

[Retrieved Chunks from Report]
${retrievedContext}

[Current Page Context]
${pageContext}
--- END CONTEXT ---

User: ${prompt}

Ascentia:`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 120000);

  try {
    const response = await fetch(completionsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'unsloth/gpt-oss-20b',
        prompt: finalPrompt,
        max_tokens: 512,
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