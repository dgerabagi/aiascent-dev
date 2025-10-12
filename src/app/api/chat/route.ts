import { NextResponse } from 'next/server';

// This function is for streaming responses
export async function POST(request: Request) {
  const { prompt, pageContext } = await request.json();

  // Determine the LLM endpoint from environment variables
  const llmUrl = process.env.REMOTE_LLM_URL || process.env.LOCAL_LLM_URL;
  
  if (!llmUrl) {
    const errorMessage = 'LLM URL not configured. Set REMOTE_LLM_URL or LOCAL_LLM_URL in .env.local';
    console.error(`[Chat API] ${errorMessage}`);
    return new NextResponse(errorMessage, { status: 500 });
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

  // C17 Fix: Increase timeout to 120 seconds (2 minutes) for model cold start
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 120000); 

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

    const stream = response.body;

    return new Response(stream, {
        headers: { 
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
         },
    });

  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
        console.error(`[Chat API] Request to LLM server timed out after 120 seconds. URL: ${completionsUrl}`);
        const debugMessage = `Connection timed out. 
        TROUBLESHOOTING:
        1. Verify the LMStudio server is running on the host machine.
        2. Check the firewall on the host machine (${llmUrl}) to ensure port 1234 is open for incoming TCP connections.
        3. Ensure the LMStudio server is started with '--host 0.0.0.0' to accept connections from other machines on the network.`;
        console.error(debugMessage);
        return new NextResponse(`Error: Connection to the AI service timed out. ${debugMessage}`, { status: 504 }); // Gateway Timeout
    }

    // Check for connection refused error
    if (error instanceof TypeError && error.message.includes('fetch failed')) {
        console.error(`[Chat API] Network error: Could not connect to the LLM server. URL: ${completionsUrl}. Cause: ${error.cause}`);
        const debugMessage = `Network connection failed. This usually means the server at the specified address is not running or is unreachable.
        TROUBLESHOOTING:
        1. Verify the LMStudio server is running.
        2. Double-check the IP address and port in your .env.local file for REMOTE_LLM_URL.
        3. Check the firewall on the host machine (${llmUrl}) for port 1234.`;
        console.error(debugMessage);
        return new NextResponse(`Error: Could not connect to the AI service. ${debugMessage}`, { status: 502 }); // Bad Gateway
    }

    console.error('[Chat API] Error proxying chat request:', error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(`Error proxying chat request: ${errorMessage}`, { status: 500 });
  }
}