import { NextResponse } from 'next/server';
import { Index } from 'faiss-node';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Gets a vector embedding for a single text chunk from the local API.
 */
async function getEmbedding(text: string, embeddingUrl: string): Promise<number[] | null> {
    console.log(`[Chat API] Requesting embedding for text (length: ${text.length}): "${text.substring(0, 100)}..."`);
    try {
        const response = await fetch(embeddingUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'text-embedding-granite-embedding-278m-multilingual',
                input: text,
            }),
        });

        const rawText = await response.text(); // Get raw text first for robust logging

        if (!response.ok) {
            console.error(`[Chat API] Embedding API error: ${response.status}`, rawText);
            return null;
        }
        // console.log(`[Chat API] Raw embedding response text:`, rawText); // C4: Suppressed verbose log

        const data = JSON.parse(rawText); // Parse manually after logging

        if (data?.data?.[0]?.embedding) {
            // console.log(`[Chat API] Successfully extracted embedding vector from standard structure.`); // C4: Suppressed
            return data.data[0].embedding;
        }
        
        if (data?.data?.embedding) {
             // console.log(`[Chat API] Successfully extracted embedding vector from alternate structure.`); // C4: Suppressed
             return data.data.embedding;
        }
        if (data?.embedding) {
            // console.log(`[Chat API] Successfully extracted embedding vector from root structure.`); // C4: Suppressed
            return data.embedding;
        }

        console.error('[Chat API] Invalid embedding response structure. Full response object:', data);
        return null;
    } catch (error: any) {
        // C4: Suppress full stack trace for connection errors, just log a warning
        if (error.cause && (error.cause.code === 'ECONNREFUSED' || error.cause.code === 'UND_ERR_CONNECT_TIMEOUT')) {
             console.warn(`[Chat API] Embedding API unavailable: ${error.message}`);
        } else {
             console.error(`[Chat API] Failed to get embedding for query. Error name: ${error.name}, message: ${error.message}`);
        }
        return null;
    }
}

/**
 * Performs a RAG lookup against a specified knowledge base.
 */
async function performRagLookup(query: string, kbIdentifier: string, embeddingUrl: string, k: number): Promise<{ retrievedContext: string; retrievedDocsLog: string; }> {
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
            // C4: Reduced to warning to avoid flooding logs during dev
            console.warn(`[Chat API] Embeddings not found for '${kbIdentifier}'. Skipping RAG.`);
            return { retrievedContext: '', retrievedDocsLog: 'Embeddings not found.' };
        }

        const index = Index.read(faissPath);
        const chunks = JSON.parse(await fs.readFile(chunksPath, 'utf-8'));
        const queryEmbedding = await getEmbedding(query, embeddingUrl);

        if (queryEmbedding && index.getDimension() === queryEmbedding.length) {
            const { labels, distances } = index.search(queryEmbedding, k);
            if (labels.length > 0) {
                const results = labels.map((labelIndex: number) => chunks[labelIndex]?.chunk).filter(Boolean);
                retrievedContext = results.join('\n\n---\n\n');
                retrievedDocsLog = `Retrieved ${results.length} documents from '${kbIdentifier}' KB:\n${results.map((doc, i) => `  Doc ${i + 1} (Dist: ${distances[i].toFixed(4)}): "${doc.substring(0, 80)}..."`).join('\n')}`;
            }
        } else if (!queryEmbedding) {
            throw new Error("Could not generate embedding for the query.");
        } else {
            throw new Error(`Embedding dimension mismatch. Index: ${index.getDimension()}, Query: ${queryEmbedding.length}. Please regenerate embeddings.`);
        }
    } catch (error: any) {
        // C4: Suppress RAG errors if it's just connection issues
        if (error.message.includes('Could not generate embedding')) {
             console.warn(`[Chat API] RAG skipped: Embedding generation failed.`);
        } else {
             console.error(`[Chat API] RAG Error for '${kbIdentifier}' KB:`, error);
        }
        retrievedContext = `RAG system failed: ${error.message}.`;
        retrievedDocsLog = `RAG Error: ${error.message}`;
    }
    return { retrievedContext, retrievedDocsLog };
}


const markdownFormattingInstruction = `
Use standard GitHub Flavored Markdown for all formatting.
- For lists, use compact formatting. The content must be on the same line as the bullet or number. For example, write "- First item" and NOT "-
First item".
- For inline code, use single backticks, for example: \`DCE.vsix\`. Do not add blank lines before or after inline code.
- For multi-line code blocks, use triple backticks with a language identifier.
- For tables, use standard markdown table syntax with pipes and hyphens. Do not use HTML tags like <br> inside tables; use markdown newlines if necessary and supported by the renderer.
- Avoid using HTML tags like <kbd>. Use markdown alternatives, like backticks for commands.
`;

const systemPrompts = {
    dce: `You are @Ascentia, an AI guide for the aiascent.dev website. Your purpose is to answer questions about the Data Curation Environment (DCE), the 'Citizen Architect' methodology, and the 'Process as Asset' whitepaper.

Your answers should be based *only* on the provided context chunks from the project's official documentation. Be helpful, encouraging, and aim to increase the user's understanding of the project.

If the answer isn't directly in the context, state that, but still try to provide related information if available. Use markdown for formatting as described below to enhance clarity. Do not invent information.
${markdownFormattingInstruction}`,
    report: `You are @Ascentia, an AI guide for "The Ascent Report" on the aiascent.dev website. Your purpose is to act as a subject matter expert, answering questions based *only* on the provided context from the report. The report covers topics like the AI industry's labor model, the 'fissured workplace,' cognitive security (COGSEC), and geopolitical strategy.

Your answers must be grounded in the provided context chunks. Be helpful, concise, and stay on topic.

If the answer isn't directly in the context, state that, but you can offer to discuss related concepts that *are* in the context. Use simple markdown for formatting as described below. Do not invent information or use outside knowledge.
${markdownFormattingInstruction}`,
    academy: `You are @Ascentia, an AI guide for the V2V Academy on aiascent.dev. Your purpose is to answer questions about the "Vibecoding to Virtuosity" curriculum, its lessons, and the core concepts of AI-assisted development it teaches.

Your answers must be based *only* on the provided context chunks from the V2V Academy's official curriculum. Be helpful, encouraging, and aim to clarify concepts for the learner.

If the answer isn't directly in the context, state that, but you can guide the user to the relevant lesson if you can infer it. Use markdown for formatting to enhance clarity. Do not invent information.
${markdownFormattingInstruction}`,
    anguilla: `You are @Ascentia, an AI strategic advisor for the Anguilla Project. Your purpose is to answer questions about the proposal to transform Anguilla into an AI-Native Nation, covering topics like Sovereign Infrastructure, Cognitive Capital, and the Automated State.

Your answers must be based *only* on the provided context chunks from the project proposals. Be helpful, professional, and persuasive.

If the answer isn't directly in the context, state that. Use markdown for formatting as described below. Do not invent information.
${markdownFormattingInstruction}`,
};

// C89: New persona-aware suggestion prompts
const suggestionSystemPrompts = {
    page: {
        default: `Your ONLY task is to analyze the following text from a document and generate 2-4 insightful follow-up questions a user might ask to learn more. Your questions should be deeper, drawing connections between the original page content and the extra context provided. Respond ONLY with a valid JSON array of strings. Do not include any other text, explanation, or markdown formatting. Your entire response must be parseable as JSON.

Example of a PERFECT response:
["What is the main benefit of this feature?", "How does this compare to other methods?"]`,
        career_transitioner: `You are an AI assistant helping a career-transitioning professional. Analyze the following lesson content and generate 2-4 insightful questions they might ask to understand its strategic value and practical application in a business context. Focus on questions about ROI, team impact, and professional development. Respond ONLY with a valid JSON array of strings.`,
        underequipped_graduate: `You are an AI assistant helping a recent graduate. Analyze the following lesson content and generate 2-4 clear, foundational questions they might ask to solidify their understanding and see how this skill applies to getting a job. Focus on "what is," "why does it matter," and "how do I use this" questions. Respond ONLY with a valid JSON array of strings.`,
        young_precocious: `You are an AI assistant helping a young, ambitious learner. Analyze the following lesson content and generate 2-4 deep, probing questions they might ask to explore the underlying principles, advanced applications, or creative potential of the concept. Focus on "what if," "how does it work at a deeper level," and "what's the next step to mastery" questions. Respond ONLY with a valid JSON array of strings.`,
    },
    conversation: `Your ONLY task is to analyze the following conversation history and generate 2-4 insightful follow-up questions the user might ask next. The goal is to continue the current conversational thread. Respond ONLY with a valid JSON array of strings. Do not include any other text, explanation, or markdown formatting. Your entire response must be parseable as JSON.

Example of a PERFECT response:
["Can you elaborate on the second point?", "How does that concept apply to a real-world scenario?"]`
};


export async function POST(request: Request) {
  const { prompt, pageContext, knowledgeBase = 'report', reportName, task, suggestionType, context } = await request.json();
  const kbIdentifier = (knowledgeBase === 'dce' || knowledgeBase === 'report' || knowledgeBase === 'academy' || knowledgeBase === 'anguilla') ? knowledgeBase as keyof typeof systemPrompts : 'report';

  const llmUrl = process.env.REMOTE_LLM_URL;
  const embeddingUrl = process.env.EMBEDDING_API_URL;

  if (!llmUrl || !embeddingUrl) {
    const errorMessage = 'AI endpoints not configured. Set REMOTE_LLM_URL and EMBEDDING_API_URL in .env.local';
    console.error(`[Chat API] ${errorMessage}`);
    return new NextResponse(errorMessage, { status: 500 });
  }

  const completionsUrl = `${llmUrl}/v1/completions`;

  if (task === 'generate_suggestions') {
    const suggestionPromptType = (suggestionType === 'page' || suggestionType === 'conversation') ? suggestionType : 'page';
    
    let systemPrompt = suggestionSystemPrompts.page.default;

    if (suggestionPromptType === 'page' && kbIdentifier === 'academy' && reportName) {
        if (reportName.includes('career_transitioner')) {
            systemPrompt = suggestionSystemPrompts.page.career_transitioner;
        } else if (reportName.includes('underequipped_graduate')) {
            systemPrompt = suggestionSystemPrompts.page.underequipped_graduate;
        } else if (reportName.includes('young_precocious')) {
            systemPrompt = suggestionSystemPrompts.page.young_precocious;
        }
    } else if (suggestionPromptType === 'conversation') {
        systemPrompt = suggestionSystemPrompts.conversation;
    }

    const { retrievedContext, retrievedDocsLog } = await performRagLookup(context, kbIdentifier, embeddingUrl, 3);
    // console.log(`[Chat API - Suggestions] RAG Diagnostic for page context using KB: '${kbIdentifier}'`); // C4: Suppressed
    // console.log(`[Chat API - Suggestions] ${retrievedDocsLog}`); // C4: Suppressed

    try {
        const suggestionPrompt = `
System: ${systemPrompt}

--- START ORIGINAL DOCUMENT TEXT ---
${context}
--- END ORIGINAL DOCUMENT TEXT ---

--- START EXTRA CONTEXT FROM KNOWLEDGE BASE ---
${retrievedContext}
--- END EXTRA CONTEXT FROM KNOWLEDGE BASE ---

User: Generate insightful questions based on all the text provided above.

Assistant:`;

        const response = await fetch(completionsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'unsloth/gpt-oss-20b',
                prompt: suggestionPrompt,
                max_tokens: 512,
                temperature: 0.5,
                stream: false,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`LLM server error for suggestions: ${response.status} ${errorBody}`);
        }

        const data = await response.json();
        let content = data.choices?.[0]?.text || '[]';
        // console.log(`[Chat API - Suggestions] Raw LLM response:`, JSON.stringify(content)); // C4: Suppressed

        const assistantMarker = '<|start|>assistant';
        const assistantPartIndex = content.lastIndexOf(assistantMarker);
        if (assistantPartIndex !== -1) {
            content = content.substring(assistantPartIndex);
        }

        const firstBracket = content.indexOf('[');
        const lastBracket = content.lastIndexOf(']');
        
        if (firstBracket === -1 || lastBracket === -1 || lastBracket < firstBracket) {
            console.warn(`[Chat API - Suggestions] Could not find a valid JSON array structure in response: ${content}`);
            throw new Error('Invalid suggestions format from LLM: No array found.');
        }

        const jsonString = content.substring(firstBracket, lastBracket + 1);
        // console.log(`[Chat API - Suggestions] Extracted JSON string:`, jsonString); // C4: Suppressed
        
        try {
            const suggestions = JSON.parse(jsonString);
            // console.log(`[Chat API - Suggestions] Successfully parsed suggestions:`, suggestions); // C4: Suppressed
            return NextResponse.json(suggestions);
        } catch (parseError: any) {
            console.error(`[Chat API - Suggestions] JSON parsing failed: ${parseError.message}. Raw extracted string was: ${jsonString}`);
            throw new Error('JSON parsing failed');
        }

    } catch (error: any) {
        // C4: Suppress error if it's just connection
        if (error.cause && (error.cause.code === 'ECONNREFUSED' || error.cause.code === 'UND_ERR_CONNECT_TIMEOUT')) {
             console.warn(`[Chat API - Suggestions] AI unavailable: ${error.message}`);
        } else {
             console.error('[Chat API - Suggestions] Error generating suggestions:', error.message);
        }
        // Return empty array instead of 500 to keep UI clean
        return NextResponse.json([]); 
    }
  }

  // --- Existing RAG and Chat Logic ---
  const { retrievedContext, retrievedDocsLog } = await performRagLookup(prompt, kbIdentifier, embeddingUrl, 6);

  console.log(`[Chat API] RAG Diagnostic for prompt: "${prompt}" using KB: '${kbIdentifier}'`);
  // console.log(`[Chat API] ${retrievedDocsLog}`); // C4: Suppressed

  let systemPrompt = systemPrompts[kbIdentifier];

  // C101: Add persona-specific tonal adjustments
  if (kbIdentifier === 'academy' && reportName) {
    if (reportName.includes('career_transitioner')) {
        systemPrompt += `\n\nAdditionally, your tone should be professional and peer-to-peer. The user is a career-transitioning professional with existing domain expertise. Frame your explanations in a business context, using analogies related to strategy, project management, and return on investment (ROI). Focus on how these concepts provide a strategic advantage in a professional environment.`;
    } else if (reportName.includes('underequipped_graduate')) {
        systemPrompt += `\n\nAdditionally, your tone should be that of a helpful and encouraging mentor. The user is a recent graduate looking to build foundational, job-ready skills. Use clear, direct language and focus on the practical application of concepts. Connect your explanations to how these skills are valuable in the tech industry and how they contribute to building a strong professional portfolio.`;
    } else if (reportName.includes('young_precocious')) {
        systemPrompt += `\n\nAdditionally, your tone should be engaging, encouraging, and slightly less formal. The user is a young, ambitious learner who is digitally native. Use analogies from gaming (e.g., "leveling up," "skill trees," "boss battles"), science fiction, or other creative pursuits to explain complex topics. Your goal is to make the concepts feel powerful and exciting, like unlocking a new ability. Aim for an "Explain Like I'm 15" level of clarity, but assume the user is very intelligent and quick to learn.`;
    }
  }


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
    if (error.name === 'AbortError') {
        const debugMessage = `Connection timed out. TROUBLESHOOTING: 1. Verify the LMStudio server is running. 2. Check firewall on the host machine (${llmUrl}) for port 1234. 3. Ensure LMStudio is started with '--host 0.0.0.0'.`;
        console.warn(`[Chat API] Request to LLM server timed out. ${debugMessage}`);
        return new NextResponse(`Error: Connection to the AI service timed out. ${debugMessage}`, { status: 504 });
    }

    if (error instanceof TypeError && error.message.includes('fetch failed')) {
        const debugMessage = `Network connection failed. TROUBLESHOOTING: 1. Verify the LMStudio server is running. 2. Double-check the IP/port in .env.local. 3. Check firewall on the host machine (${llmUrl}) for port 1234.`;
        console.warn(`[Chat API] Network error: Could not connect to LLM server. ${debugMessage}`);
        return new NextResponse(`Error: Could not connect to the AI service. ${debugMessage}`, { status: 502 });
    }

    console.error('[Chat API] Error proxying chat request:', error);
    return new NextResponse(`Error proxying chat request: ${error.message}`, { status: 500 });
  }
}