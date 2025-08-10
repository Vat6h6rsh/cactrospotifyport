import querystring from "querystring";

export default async function handler(req, res) {
  const code = req.query.code || null;

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
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  const data = await response.json();

  if (data.refresh_token) {
    console.log("Your refresh token:", data.refresh_token);
    res.send(
      "Auth successful! Copy this refresh token into your .env file: " +
        data.refresh_token
    );
  } else {
    res.status(400).json({ error: "Failed to retrieve refresh token" });
  }
}
