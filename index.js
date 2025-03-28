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

// Action for click on "New" button
// Obtain a new key from the key-value service
newButton.onclick = e => {
  // Send POST request on "getKey" route
  fetch(baseURL+'/getKey', { method: 'POST' })
  // Unpack response text
  .then(response => response.text())
  .then(body => {
    alert("Key generation successful");
	// Retrieve key from response body
    let key = JSON.parse(body);
    // Load the key in the input box
    document.getElementById('keyBox').value = key;
    // Hide "New" button
    document.getElementById('newButton').style.display = 'none'
    },
    err => alert("Key generation failed: "+err)
    );
};

// Action for click on "Save" button
// Retrieve the the data associated with the key
saveButton.onclick = e => {
  // Retrieve key from the "keyBox" input box
  let key = document.getElementById('keyBox').value;
  // Send POST request on "sendValue" route with the key in the query
  fetch(baseURL + '/setValue' + '?key=' + key, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(markers.toGeoJSON())
  }).then(
  // Give feedback with an alert
    () => alert("Save successful"),
    err => alert("Save failed: "+err)
  );
};
