import './style.css';
import L from 'leaflet';

// Initialize the map
const map = L.map('mapid', {
  center: L.latLng(43.72301, 10.39663),
  zoom: 15
});

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// A layer of markers
var markers = L.layerGroup();
markers.addTo(map);

// Marker's count
var n = 0;

// Storage URL
var baseURL = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/dhss21-mczua/service/svc/incoming_webhook"

// Add controls for the layer
L.control.layers(
  {},                  // base layers, radio buttons
  {"Markers": markers} // overlay layers, checkbox buttons
).addTo(map);

// Attach a callback to the click event
map.on('click', e => {
  n = n + 1;
  let displayCoord = document.getElementById('displayCoord');
  let marker = L.marker(e.latlng, { title: n }).addTo(map);
  markers.addLayer(marker);
  displayCoord.innerHTML +=
    n +
    ': ' +
    marker.getLatLng().lat.toFixed(5) +
    ', ' +
    marker.getLatLng().lng.toFixed(5) +
    '<br>';  
    console.log('%c ' + JSON.stringify(markers.toGeoJSON()), 'color:white)'); //patched for Stackblitz color bug
});

newButton.onclick = e => {
  fetch(baseURL+'/getKey', { method: 'POST' })
  .then(response => response.text())
  .then(body => {
    let key = JSON.parse(body);
    fetch(baseURL+'/setValue'+'?key='+key, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(markers.toGeoJSON())
    }).then(
      () => {
        console.log("Success");
        document.getElementById('keyBox').value = key;
        document.getElementById('newButton').style.display = 'none'
      },
      err => console.log(err)
    );
  });
};
