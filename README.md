# Sync Spotify Playlist with Notion 🎵📋

This project creates an integration between the **Notion API** and the **Spotify API** using JavaScript. It fetches data from a Spotify playlist and updates a Notion database with track metadata, including musical properties like artist, album, and more.

## ⭐ Give the Project a Star

If you find this project helpful, consider giving it a star!  
To do that, follow these steps:

---

## Step-by-Step Guide

### 1. Clone the repository
Open your terminal and run the following commands:

```bash
git clone <https://github.com/raminhuk/sync-spotify-playlists-with-notion.git>
cd <sync-spotify-playlists-with-notion>
```


### 2. Set environment variables
In the root directory of the project, create a .env file with the following content:

```bash
NOTION_TOKEN=<your-notion-integration-token>
SPOTIFY_CLIENT_ID=<your-spotify-client-id>
SPOTIFY_CLIENT_SECRET=<your-spotify-client-secret>
SPOTIFY_PLAYLIST_ID=<your-target-playlist-id>
NOTION_DATABASE_ID=<your-notion-database-id>
```
Replace the placeholders (e.g., <your-notion-integration-token>) with your actual credentials.

### 3. Install dependencies
In the terminal, run the following command to install the necessary dependencies:

```bash
npm install
```
### 4. Start the application
To start the project, run:

```bash
npm start
```

## Prerequisites
### Ensure you have the following before starting:

- Node.js installed on your machine
- A Spotify Developer account to create an app and get your credentials
- A Notion account with access to create a database and an integration

### Features
- Fetch Spotify Playlist Data: Retrieve tracks from any Spotify playlist.
- Update Notion Database: Automatically populate your Notion database with track metadata.
- Customizable: Easily adapt the code to fetch additional musical properties or sync with different playlists.