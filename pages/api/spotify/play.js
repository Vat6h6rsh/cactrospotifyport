import { getAccessToken } from "../../../utils/spotify";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { uri } = req.body;
  if (!uri) return res.status(400).json({ error: "Track URI required" });

  try {
    const token = await getAccessToken();
    await fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ uris: [uri] }),
    });
    res.status(200).json({ status: "Playing track" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
