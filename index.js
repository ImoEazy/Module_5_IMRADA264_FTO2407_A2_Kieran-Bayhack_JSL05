// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [ //This is an array of song objects. Each object contains a title, artist, and genre property in a string
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
const guardians = { // this 'const object' maps each name to their specified genre/playlist
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Get the playlists div
    const playlistsDiv = document.getElementById('playlists');//This gets the HTML element reference 'div' with the ID playlists, where playlists will display.
    
    // Clear any existing content
    playlistsDiv.innerHTML = '';// ensures any content existing within the playlists div is cleared before adding new content.
    
    // Loop through each Guardian and create a playlist
    for (const [guardian, genre] of Object.entries(guardians)) {//loops over entries in the guardians object. 'guardian' represents name of the Guardian, 'genre' is their preferred genre.
        // Filter songs by genre
        const filteredSongs = songs.filter(song => song.genre === genre);// filters songs array to include only songs that match the current genre.
        
        // Create a playlist container
        const playlistDiv = document.createElement('div');//Creates a new div element for each Guardian's playlist,
        playlistDiv.className = 'playlist';
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;//and enables inner HTML to include the Guardian's name as a heading
        
        // Add songs to the playlist
        filteredSongs.forEach(song => {//Creates a div for each song in the filtered list, 
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;//setting its class and inner HTML to show the song title and artist
            playlistDiv.appendChild(songDiv);
        });
        
        // Append the playlist to the playlists div
        playlistsDiv.appendChild(playlistDiv);//Add the new completed playlist 'container' to the playlists div on the page.
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);//calling the 'generatePlaylist' function so the guardians and songs arrays will generate and display the playlists.

