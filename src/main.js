require('dotenv').config();

const { getSpotifyPlaylistTracks } = require('./integrations/spotifyIntegration');
const { addToNotionDatabase } = require('./integrations/notionIntegration');

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const SPOTIFY_PLAYLIST_ID = process.env.SPOTIFY_PLAYLIST_ID;

// Main function to fill the Notion database with Spotify playlist data
async function fillNotionDatabase() {
  const tracks = await getSpotifyPlaylistTracks(SPOTIFY_PLAYLIST_ID);
  
  for (const track of tracks) {
    await addToNotionDatabase(NOTION_DATABASE_ID, track);
    console.log(`Added to Notion: Title: ${track.title}, Artist: ${track.artist}, Album: ${track.album}`);
  }
}

fillNotionDatabase();