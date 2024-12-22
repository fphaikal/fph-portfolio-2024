import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const results = await fetch(process.env.FPH_API_URL + '/api/spotify/now-playing');
    const data = await results.json();

    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
