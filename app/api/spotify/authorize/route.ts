import { NextResponse } from 'next/server';

// Ganti dengan informasi aplikasi Spotify-mu
const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:3000/api/spotify/callback'
const scopes = 'user-top-read user-read-playback-state user-read-currently-playing user-read-recently-played'; // Scopes yang diperlukan

export async function GET() {
  // Buat URL untuk mengarahkan pengguna ke Spotify untuk login dan memberikan izin
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes)}`;

  // Redirect pengguna ke URL tersebut
  return NextResponse.redirect(authUrl);
}
