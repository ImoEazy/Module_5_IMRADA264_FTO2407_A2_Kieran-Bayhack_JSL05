// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [ //This is an array of song objects. Each object contains a title, artist, and genre property.
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
const guardians = { // this const object maps each name to their specified genre/playlist
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Get the playlists div
    const playlistsDiv = document.getElementById('playlists');//This gets a reference to an HTML element with the ID playlists, which is where the playlists will be displayed.
    
    // Clear any existing content
    playlistsDiv.innerHTML = '';//This ensures that any existing content within the playlists div is cleared before adding new content.
    
    // Loop through each Guardian and create a playlist
    for (const [guardian, genre] of Object.entries(guardians)) {//This loops over each entry in the guardians object. guardian represents the name of the Guardian, and genre is their preferred genre.
        // Filter songs by genre
        const filteredSongs = songs.filter(song => song.genre === genre);//This filters the songs array to include only those songs that match the current genre.
        
        // Create a playlist container
        const playlistDiv = document.createElement('div');//Creates a new div element for each Guardian's playlist and sets its inner HTML to include the Guardian's name as a heading.
        playlistDiv.className = 'playlist';
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;
        
        // Add songs to the playlist
        filteredSongs.forEach(song => {//Creates a div for each song in the filtered list, setting its class and inner HTML to show the song title and artist.
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistDiv.appendChild(songDiv);
        });
        
        // Append the playlist to the playlists div
        playlistsDiv.appendChild(playlistDiv);//Adds the completed playlist container to the playlists div on the page.
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);//This line calls the generatePlaylist function with the guardians and songs arrays to generate and display the playlists.

