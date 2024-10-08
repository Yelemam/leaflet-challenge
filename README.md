# leaflet-challenge


# Table of Contents

    1.    Background
    2.    Features
    3.    Setup
    4.    Part 1: Earthquake Visualization
          • Dataset
          • Visualization Steps
          • Map Details
    5.    Part 2: Tectonic Plates Visualization (Optional)
    6.    Usage
    7.    Acknowledgements

# Background

The United States Geological Survey (USGS) provides scientific data about natural hazards, ecosystem health, climate change, and land use. They collect
 a massive amount of data globally but need more effective visualization tools. This project focuses on visualizing earthquake data to help educate the 
 public and government agencies.

In this challenge, you’ll create a Leaflet map to display USGS earthquake data, helping the USGS convey important information and potentially secure 
funding for related projects.

# Features

    •    Dynamic earthquake data visualization using USGS GeoJSON data.
    •    Earthquake markers scale by magnitude and color by depth.
    •    Interactive popups for each marker providing details on location, magnitude, and depth.
    •    A map legend to explain earthquake depth by color.
    •    Optional: Plot tectonic plate boundaries and compare them with seismic activity.

#Setup

    1.    Clone the repository:
    2.    Install the required dependencies:
          This project uses Leaflet and D3.js. Ensure you include the necessary CDN links in your index.html:
          • Leaflet Documentation
          • D3.js Documentation
    3.    Folder Structure:
          • Leaflet-Part-1: Contains the first part of the challenge, focusing on visualizing earthquake data.
          • Leaflet-Part-2: Optional, focuses on overlaying tectonic plate data with earthquakes.
          • Images and static: Assets for displaying data.

# Part 1: Earthquake Visualization

# Dataset

USGS provides real-time earthquake data in GeoJSON format. The dataset can be retrieved from the USGS GeoJSON Feed. You can select datasets such as 
“All Earthquakes from the Past 7 Days”.

# Visualization Steps

    1. Data Fetching: Use D3 to fetch the dataset in JSON format and integrate it with Leaflet for visualization.
    2. Map Creation: Use Leaflet to create a base map and plot earthquake markers using latitude and longitude from the dataset.
    3. Marker Customization: Earthquake markers scale based on magnitude and change color based on depth. Each marker has a popup with additional 
       information.
    Map Details
    • TileLayer: A basic tile layer from Leaflet to load the map.
    • Legend: A color legend explaining depth levels.
    • Tooltips: Popups that show magnitude, location, and depth for each earthquake marker.

# Usage

    •    Open the index.html file in a browser to view the visualization.
    •    Earthquake markers will appear based on real-time USGS data.
    •    Use the map legend to interpret the color coding for earthquake depth.
    •    Click on individual markers for more details about each earthquake.

# Part 2: Tectonic Plates Visualization

This section builds upon the earthquake visualization by adding the ability to visualize tectonic plate boundaries. By overlaying tectonic plate data, 
users can better understand the relationship between seismic activity and tectonic plates.
In this optional part, you can enhance the map by adding tectonic plate data.


# Dataset

The tectonic plate boundary data is sourced from a GeoJSON dataset available on GitHub (fraxen/tectonicplates). The data provides global boundaries of 
tectonic plates, which are an essential factor in understanding seismic activity.

# Features

    • Tectonic Plate Boundaries: Tectonic plate boundaries are overlaid on the earthquake map.
    • Layer Control: Users can toggle between the earthquake data and tectonic plates data via a control layer, providing flexibility in viewing one or both 
      datasets simultaneously.
    • Interactive Map: Like in Part 1, users can zoom in and out to examine specific regions and use map controls to switch between different map layers
      (street map and topographic map).
    • Base Map Options: Two base maps are available for selection: a street map (default) and a topographic map to give users different perspectives
      on the visualization.
    • Real-Time Data: Earthquake data continues to be pulled in real-time from the USGS, meaning that users can see current earthquake activity overlaid
      with tectonic boundaries.

# Visualization Steps

    1. Map Initialization: The map is initialized with a default view of the United States, using the street map as the base. Users can switch to the
       topographic view.
    2. Fetching Tectonic Plate Data: The tectonic plate boundaries are fetched using D3.js and rendered onto the map as polylines that outline the global 
       tectonic plates.
    3. Layer Control: Users can toggle between different layers:
       • Earthquakes: Displays the real-time earthquake data.
       • Tectonic Plates: Displays tectonic plate boundaries over the base map.
       • Both Layers: Users can opt to view both the earthquake markers and tectonic plates simultaneously, allowing them to analyze the relationship between
         plate boundaries and seismic activity.
    4. Marker Customization (Inherited from Part 1): Earthquake markers are scaled based on magnitude and colored based on depth. The tooltip provides additional information about each earthquake.

# How to Use

    1.    Open the index.html file in a browser.
    2.    Use the control layer (in the top-right corner) to switch between the earthquake data and tectonic plate visualization, or view both simultaneously.
    3.    Interact with the map by clicking on earthquake markers to view detailed information about each event.
    4.    Switch between the Street Map and Topographic Map views using the control layer to enhance your perspective of the visualization.

#Acknowledgements

    •    USGS for providing the earthquake data: USGS GeoJSON Feed
    •    Tectonic plate data provided by GitHub - fraxen/tectonicplates
    •    Libraries used:
          •    Leaflet
          •    D3.js
    • AI Assistance: Was used to provide some debugging support.
    • Activity 10 Mapping D1:  Was very helpful for Part 2 when additional help was needed to overcome challenges related to the visualization of tectonic plates.

