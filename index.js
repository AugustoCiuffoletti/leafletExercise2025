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

// Attach a callback to a click event on the map. The callback displays
// an alert with the latitude and the longitude found in the event descriptor
map.on('click', e =>
  alert(
    'Coordinates: ' + e.latlng.lat.toFixed(5) + ', ' + e.latlng.lng.toFixed(5)
  )
);
