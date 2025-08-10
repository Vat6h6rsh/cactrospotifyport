const { getAccessToken } = require("../../../utils/spotify");

module.exports = async function handler(req, res) {
  try {
    const token = await getAccessToken();
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (response.status === 204) {
      return res.status(200).json({ message: "No track currently playing" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
