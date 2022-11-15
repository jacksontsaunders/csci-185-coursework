const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    /*
    The Plan:
    1. Go out to spotify and ask for artist info matching the search term
    (ex. Drake). To do this we need to use the fetch API.
    2. Wait for Spotify to respond to us.
    3.Once spotify gives us our data, we're going to print it to the console.
    4. Figure out how to display our artist 
    */
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev);
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        // ev.preventDefault();
        search();
    }
}