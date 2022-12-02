async function getInfo() {
    const endpoint = "js/data.json";
    // console.log(tracksEndpoint);
    const data = await fetch(endpoint).then(response => response.json());
    console.log("Resorts:", data);
    displayMarkers(data);
}
function displayMarkers(resorts) {
   const markerList = [];
    for (let i = 0; i < resorts.length; i++) {
        const resort = resorts[i];
        const marker = L.marker(resort.coordinates).addTo(mymap);
        const template = `<section class = "info">
                    <img src = "${resort.img_url}"/>
                    <h2>${resort.name}</h2>
                    <h2>${resort.hours}</h2>
                    <h2>Terrain park: ${resort.terrainparks}</h2>
                    <h2>Number of runs: ${resort.runs}</h2>
                    <h2>Number of lifts: ${resort.lifts}</h2>
                    <h2>${resort.website}</h2>
                    </section>
`;
        marker.bindPopup(template);
        markerList.push(marker);

    } 
    var group = new L.featureGroup(markerList)
    mymap.fitBounds(group.getBounds());
}

//initialize map:
const mymap = L.map('mapid');//.setView([35.9, -82.50], 8.9);

//initialize tiles (there are many options):
// L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);




getInfo();