import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { text } = await request.json();

  const ttsServerUrl = process.env.TTS_SERVER_URL;

  if (!ttsServerUrl) {
    return new NextResponse('TTS server URL not configured.', { status: 500 });
  }

  try {
    const response = await fetch(ttsServerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'kokoro',
        voice: 'en_us_001',
        input: text,
        response_format: 'wav',
        speed: 1.0,
      }),
    });

    if (!response.ok || !response.body) {
      const errorText = await response.text();
      console.error(`TTS server error: ${response.status} ${response.statusText}`, errorText);
      return new NextResponse(`TTS server error: ${errorText}`, { status: response.status });
    }

    // Stream the audio back to the client
    const headers = new Headers();
    headers.set('Content-Type', 'audio/wav');
    return new NextResponse(response.body, { headers });

  } catch (error) {
    console.error('Error proxying TTS request:', error);
    return new NextResponse('Error proxying TTS request.', { status: 500 });
  }
}