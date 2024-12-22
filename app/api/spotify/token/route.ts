import { NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';
import { Buffer } from 'buffer';

// Inisialisasi Spotify API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

// Fungsi untuk refresh token akses Spotify dan memperbarui secara otomatis
const refreshSpotifyTokenAutomatically = async () => {
  try {
    const data = await spotifyApi.refreshAccessToken();
    const accessToken = data.body['access_token'];
    const expiresIn = data.body['expires_in'];

    // Set access token yang baru
    spotifyApi.setAccessToken(accessToken);
    console.log('Spotify access token refreshed');

    // Refresh token secara otomatis sebelum token kedaluwarsa
    setTimeout(refreshSpotifyTokenAutomatically, (expiresIn - 100) * 1000);
  } catch (error) {
    console.error('Error refreshing Spotify access token', error);
  }
};

export async function GET() {
  try {
    await refreshSpotifyTokenAutomatically(); // Mulai refresh token secara otomatis

    // Kembalikan status sukses
    return NextResponse.json({ message: 'Token is being refreshed automatically' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to refresh Spotify token' }, { status: 500 });
  }
}
