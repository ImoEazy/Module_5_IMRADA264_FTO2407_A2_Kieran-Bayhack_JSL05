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
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

function generatePlaylist(guardians, songs) {
    const playlistContainer = document.getElementById('playlists');

    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian]
        const playlistSongs = songs.filter(song => song.genre === genre)
        
        const playlistDiv = document.createElement('div')
        playlistDiv.className = 'playlist'

        const guardianHeading = document.createElement('h4')
        guardianHeading.textContent = `${guardian}'s Playlist`
        playlistDiv.appendChild(guardianHeading)

    playlistSongs.map(song => {
        const songDiv = document.createElement('div')
        songDiv.className = 'song'

        const songTitle = document.createElement('p')
        songTitle.className = 'song-title'
        songTitle.textContent = song.title

        const songArtist = document.createElement('p')
        songArtist.textContent = `by ${song.artist}`

       songDiv.appendChild(songTitle)
       songDiv.appendChild(songArtist)
       playlistDiv.appendChild(songDiv)
    })

    playlistContainer.appendChild(playlistDiv)
    })
}


generatePlaylist(guardians, songs);

