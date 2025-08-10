const querystring = require("querystring");

module.exports = (req, res) => {
  const scope = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-follow-read",
    "user-modify-playback-state",
  ].join(" ");

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
};
