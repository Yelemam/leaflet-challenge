// Create additional base maps for the user to choose from
var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
});

var topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
});

// Create a Layer Group for tectonic plates
var tectonicPlatesLayer = new L.LayerGroup();

// Fetch the tectonic plates data and add to the tectonicPlatesLayer
d3.json('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json').then(function(data) {
    L.geoJSON(data, {
        style: {
            color: 'orange',
            weight: 2
        }
    }).addTo(tectonicPlatesLayer);
});

// Create an overlay for the earthquake data from Part 1
var earthquakeLayer = new L.LayerGroup();

// Re-fetch the earthquake data (or reuse from app.js)
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.geometry.coordinates[2]), // Color based on depth
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        // Add popups for each marker
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]} km</p>`);
        }
    }).addTo(earthquakeLayer);
});

// Create the map object and center it
var map = L.map('map', {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetMap, earthquakeLayer]
});

// Create a baseMaps object for the user to choose between street and topographic maps
var baseMaps = {
    "Street Map": streetMap,
    "Topographic Map": topoMap
};

// Create an overlay object for the user to turn the tectonic plates and earthquake data on/off
var overlayMaps = {
    "Earthquakes": earthquakeLayer,
    "Tectonic Plates": tectonicPlatesLayer
};

// Add a layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);
