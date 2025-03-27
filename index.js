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
// Add controls for the layer
L.control.layers(
  {},                  // base layers, radio buttons
  {"Markers": markers} // overlay layers, checkbox buttons
).addTo(map);

// Attach a callback to the click event
map.on('click', e => {
  let n = markers.length + 1;
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
});
