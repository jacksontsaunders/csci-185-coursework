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
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data);
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
    console.log(data);
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);
    
    const data = await fetch(artistEndpoint).then(response => response.json());
    
    // check if there is atleast 1 element in array:
    if (data.length ===0){
        document.querySelector('#artist').innerHTML = "No results found."
        return;
    }
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);

    const template = `
    <img src = "${data[0].image_url}" />
    <h2>${data[0].image_url}</h2>
    <p>Popularity: ${data[0].popularity}</p>
     `;

    const template1 = `
    <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
        <div>
            <img src="${data[0].image_url}">
            <h2>${data[0].name}</h2>
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`

    console.log(template1);

    document.querySelector('#artist').innerHTML = template1;
    
    

     /*
    The Plan:
    0. Create the URL endpoint based on the term
    1. Go out to spotify and ask for artist info matching the search term
       (ex. Drake). To do this we need to use the fetch API.
    2. Wait for Spotify to respond to us.
    3. Once spotify gives us our data, we're going to print it to the console.
    4. Figure out how to display our artist in a tasteful way
    */
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    // console.log(ev);
    // console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        // ev.preventDefault();
        search();
    }
}