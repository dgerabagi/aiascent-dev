import { NextResponse } from 'next/server';

// This function is for streaming responses
export async function POST(request: Request) {
  const { prompt, pageContext } = await request.json();

  // Determine the LLM endpoint from environment variables
  const llmUrl = process.env.REMOTE_LLM_URL || process.env.LOCAL_LLM_URL || 'http://127.0.0.1:1234';
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
        model: 'unsloth/gpt-oss-20b', // As per vcpg context
        prompt: finalPrompt,
        max_tokens: 512,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.body) {
      return new NextResponse("LLM response has no body", { status: 500 });
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();

        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            const chunk = decoder.decode(value, { stream: true });
            // SSE format is data: {...}\n\n
            const lines = chunk.split('\n\n');
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const dataString = line.substring(6);
                if (dataString === '[DONE]') {
                  controller.close();
                  return;
                }
                try {
                  const jsonData = JSON.parse(dataString);
                  const textChunk = jsonData.choices?.text || '';
                  if (textChunk) {
                    controller.enqueue(textChunk);
                  }
                } catch (e) {
                  // Ignore parsing errors for incomplete JSON chunks
                }
              }
            }
            push();
          });
        }
        push();
      },
    });

    return new Response(stream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error('Error proxying chat request:', error);
    return new NextResponse('Error proxying chat request.', { status: 500 });
  }
}