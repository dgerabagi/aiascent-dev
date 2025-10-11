import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    console.error('TTS API received an empty or invalid text payload.');
    return new NextResponse('Invalid request: text payload is empty.', { status: 400 });
  }

  const ttsServerUrl = process.env.TTS_SERVER_URL;

  if (!ttsServerUrl) {
    console.error('TTS_SERVER_URL is not configured in environment variables.');
    return new NextResponse('TTS server URL not configured.', { status: 500 });
  }

  console.log(`[TTS Proxy] Received request for text: "${text.substring(0, 50)}..."`);

  try {
    const response = await fetch(ttsServerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'kokoro',
        voice: 'af_alloy', // C15 Fix: Changed from invalid 'en_us_001' to a valid voice
        input: text,
        response_format: 'wav',
        speed: 1.0,
      }),
    });

    if (!response.ok || !response.body) {
      const errorText = await response.text();
      console.error(`[TTS Proxy] Downstream TTS server error: ${response.status} ${response.statusText}`, errorText);
      return new NextResponse(`TTS server error: ${errorText}`, { status: response.status });
    }

    console.log(`[TTS Proxy] Streaming audio response back to client.`);
    const headers = new Headers();
    headers.set('Content-Type', 'audio/wav');
    return new NextResponse(response.body, { headers });

  } catch (error) {
    console.error('[TTS Proxy] Error proxying TTS request:', error);
    return new NextResponse('Error proxying TTS request.', { status: 500 });
  }
}