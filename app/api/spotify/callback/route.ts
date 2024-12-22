import { NextResponse } from "next/server";
import fetch from "node-fetch";
// import { URLSearchParams } from "url";

// Ganti dengan informasi aplikasi Spotify-mu
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || ""; // Misalnya: 'http://localhost:3000/api/spotify/callback'

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code"); // Dapatkan authorization code dari query string

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not found" },
      { status: 400 }
    );
  }

  if (!redirectUri) {
    return NextResponse.json(
      { error: "Redirect URI not found" },
      { status: 400 }
    );
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirectUri,
  });

  const headers = {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  try {
    // Mengirimkan permintaan untuk mendapatkan token
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json() as any;

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;
    const expiresIn = data.expires_in;

    // Simpan refresh token untuk digunakan nanti (misalnya, di environment atau database)
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);

    return NextResponse.json(
      {
        message: "Tokens received successfully",
        accessToken,
        refreshToken,
        expiresIn,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch token" },
      { status: 500 }
    );
  }
}
