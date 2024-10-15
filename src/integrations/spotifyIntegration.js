const { getSpotifyAccessToken } = require('../config/spotify');

// Helper function to make GET requests
async function fetchJson(url, headers) {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch(url, { headers });
  return response.json();
}

// Fetch tracks from a Spotify playlist
async function getSpotifyPlaylistTracks(playlistId) {
  const accessToken = await getSpotifyAccessToken();
  const headers = {
    'Authorization': `Bearer ${accessToken}`
  };

  const playlistResponse = await fetchJson(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, headers);
  const tracks = playlistResponse.tracks.items.map(item => {
    const track = item.track;
    return {
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      album: track.album.name,
      duration: track.duration_ms,
      popularity: track.popularity,
      external_url: track.external_urls.spotify,
      id: track.id
    };
  });

  // Fetch additional audio features for each track
  const trackIds = tracks.map(track => track.id).join(',');
  const audioFeaturesResponse = await fetchJson(`https://api.spotify.com/v1/audio-features?ids=${trackIds}`, headers);
  const audioFeatures = audioFeaturesResponse.audio_features;

  return tracks.map((track, index) => ({
    ...track,
    key: audioFeatures[index].key,
    mode: audioFeatures[index].mode,
    tempo: audioFeatures[index].tempo,
    danceability: audioFeatures[index].danceability
  }));
}

module.exports = { getSpotifyPlaylistTracks };