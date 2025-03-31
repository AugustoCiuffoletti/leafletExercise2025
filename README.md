# Step 7: Exporting Data as a GeoJSON String  

To share our collected data with other applications, we need to encode it in the **GeoJSON** format.

Each time a new marker is added to the map:

1. **Retrieve the markers layer** and convert its contents into GeoJSON format.  
2. **Use the `toGeoJSON` method** provided by *Leaflet* to generate a GeoJSON object from the layer.  
3. **Convert the object to a string** using `JSON.stringify()`.  
4. **Display the result** in an alert to visualize the exported data.  

This allows us to copy and use the GeoJSON string in other applications that support spatial data.  

When you're ready, proceed to the next step [here](https://github.com/AugustoCiuffoletti/leafletExercise2025/tree/step-8).  
