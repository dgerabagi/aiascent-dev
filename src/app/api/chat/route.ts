import { NextResponse } from 'next/server';

// This function is for streaming responses
export async function POST(request: Request) {
  const { prompt, pageContext } = await request.json();

  // Determine the LLM endpoint from environment variables
  const llmUrl = process.env.REMOTE_LLM_URL || process.env.LOCAL_LLM_URL;
  
  if (!llmUrl) {
    console.error('LLM URL not configured. Set REMOTE_LLM_URL or LOCAL_LLM_URL in .env.local');
    return new NextResponse('LLM service is not configured.', { status: 500 });
  }

  const completionsUrl = `${llmUrl}/v1/completions`;

  const systemPrompt = `You are @Ascentia, an AI guide for "The Ascent Report". Your purpose is to answer questions based *only* on the provided context from the report. Be helpful, concise, and stay on topic. Do not invent information. If the answer is not in the context, say "That information is not available in the current context."`;

  const finalPrompt = `
System: ${systemPrompt}

--- START CONTEXT ---
${pageContext}
--- END CONTEXT ---

User: ${prompt}

Ascentia:`;

  try {
    const response = await fetch(completionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'unsloth/gpt-oss-20b',
        prompt: finalPrompt,
        max_tokens: 512,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`LLM server error: ${response.status} ${response.statusText}`, errorBody);
        return new NextResponse(`Error from LLM service: ${errorBody}`, { status: response.status });
    }

    if (!response.body) {
      return new NextResponse("LLM response has no body", { status: 500 });
    }

    const stream = response.body;

    return new Response(stream, {
        headers: { 
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
         },
    });

  } catch (error) {
    console.error('Error proxying chat request:', error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(`Error proxying chat request: ${errorMessage}`, { status: 500 });
  }
}