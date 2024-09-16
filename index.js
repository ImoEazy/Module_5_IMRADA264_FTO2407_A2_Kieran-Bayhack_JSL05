// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Get the playlists div
    const playlistsDiv = document.getElementById('playlists');
    
    // Clear any existing content
    playlistsDiv.innerHTML = '';
    
    // Loop through each Guardian and create a playlist
    for (const [guardian, genre] of Object.entries(guardians)) {
        // Filter songs by genre
        const filteredSongs = songs.filter(song => song.genre === genre);
        
        // Create a playlist container
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;
        
        // Add songs to the playlist
        filteredSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistDiv.appendChild(songDiv);
        });
        
        // Append the playlist to the playlists div
        playlistsDiv.appendChild(playlistDiv);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

