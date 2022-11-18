//initialize map:
const mymap = L.map('mapid').setView([35.9,-82.50], 8.5);

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



// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }

const markerWL = L.marker([35.95,-82.51]).addTo(mymap);
const markerCat = L.marker([35.55,-83.09]).addTo(mymap);
const markerApp = L.marker([36.17,-81.66]).addTo(mymap);
const markerSugar = L.marker([36.13,-81.86]).addTo(mymap);
const markerBeech = L.marker([36.19,-81.88]).addTo(mymap);

// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// connect each object to a "popup" effect:
markerWL.bindPopup("<b>Wolf Laurel</b><br>Resort info .");
markerCat.bindPopup("<b>Cataloochee</b><br>Resort info.");
markerApp.bindPopup("<b>Appalachian Ski Mountain</b><br>Resort info.");
markerSugar.bindPopup("<b>Sugar Mountain Resort</b><br>Resort info.");
markerBeech.bindPopup("<b>Beech Mountain Ski Resort</b><br>Resort info.");

// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");