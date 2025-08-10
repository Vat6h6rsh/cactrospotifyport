const querystring = require("querystring");

let access_token_cache = "";

async function getAccessToken() {
  if (!process.env.SPOTIFY_REFRESH_TOKEN) {
    throw new Error("No refresh token set. Please login first.");
  }

  const basicAuth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  if (data.access_token) {
    access_token_cache = data.access_token;
    return access_token_cache;
  } else {
    throw new Error("Failed to refresh Spotify access token");
  }
}

module.exports = { getAccessToken };
