const { Client } = require('@notionhq/client');

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Add data to the Notion database
async function addToNotionDatabase(databaseId, track) {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Title': {
          title: [
            {
              text: {
                content: track.title
              }
            }
          ]
        },
        'Artist': {
          rich_text: [
            {
              text: {
                content: track.artist
              }
            }
          ]
        },
        'Album': {
          rich_text: [
            {
              text: {
                content: track.album
              }
            }
          ]
        },
        'Duration': {
          number: track.duration
        },
        'Popularity': {
          number: track.popularity
        },
        'External_URL': {
          url: track.external_url
        },
        'Key': {
          rich_text: [
            {
              text: {
                content: track.key.toString()
              }
            }
          ]
        },
        'Mode': {
          rich_text: [
            {
              text: {
                content: track.mode.toString()
              }
            }
          ]
        },
        'Tempo': {
          number: track.tempo
        },
        'Danceability': {
          number: track.danceability
        }
      }
    });
  } catch (error) {
    console.error('Error adding to Notion database:', error);
  }
}

module.exports = { addToNotionDatabase };