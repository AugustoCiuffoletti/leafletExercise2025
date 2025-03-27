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

// An array of markers
var markers = [];


// Attach a callback to the click event
map.on('click', e => {
  let n = markers.length + 1;
  let displayCoord = document.getElementById('displayCoord');
  let marker = L.marker(e.latlng, { title: n }).addTo(map);
  markers.push(marker);
  displayCoord.innerHTML +=
    n +
    ': ' +
    marker.getLatLng().lat.toFixed(5) +
    ', ' +
    marker.getLatLng().lng.toFixed(5) +
    '<br>';
});
