const querystring = require('querystring');

// Function to get Spotify access token
async function getSpotifyAccessToken() {
  const fetch = (await import('node-fetch')).default;
  const postData = querystring.stringify({
    grant_type: 'client_credentials'
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    },
    body: postData
  });

  const data = await response.json();
  return data.access_token;
}

module.exports = { getSpotifyAccessToken };