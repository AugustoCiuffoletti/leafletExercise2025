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

// Attach a callback to the click event
map.on('click', e => {
  // Get a handle for the DOM element containing the list of coordinates
  let displayCoord = document.getElementById('displayCoord');
  // Add a marker with the coordinates in the event descriptor
  let marker = L.marker(e.latlng).addTo(map);
  // Concatenate the new coordinates in the DOM element
  displayCoord.innerHTML +=
    marker.getLatLng().lat.toFixed(5) + // truncate coordinates
    ', ' +
    marker.getLatLng().lng.toFixed(5) +
    '<br>';
});
