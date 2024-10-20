import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapComponent = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([19.0728, 72.8999], 13); // Set to KJSCE location

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const locations = [
            {
                name: "KJSCE",
                coords: [19.0728, 72.8999],
                description: "K. J. Somaiya College of Engineering",
            },
        ];

        locations.forEach(location => {
            // Create a marker and bind a popup
            L.marker(location.coords).addTo(map)
                .bindPopup(`
                    <strong>${location.name}</strong><br />
                    ${location.description}<br />
                    <a href="https://www.google.com/maps/search/?api=1&query=${location.coords[0]},${location.coords[1]}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                `);
        });

        // Cleanup function to remove the map instance
        return () => {
            map.remove(); // Removes the map instance from the DOM
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <div className="location-info">
                <h2>Where to Find Us</h2>
                <h1>OUR LOCATIONS</h1>
            </div>

            <div id="map" style={{ height: '500px' }}></div>
        </div>
    );
};

export default MapComponent;
