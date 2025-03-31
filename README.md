# Step 4: Linking Markers and Coordinates

Each marker in *Leaflet* has a `title` attribute that appears as a tooltip when the mouse hovers over it, without requiring a click. We can leverage this feature to associate each marker with its corresponding coordinates.

## Implementing the Marker-Coordinate Link

To achieve this:
1. **Introduce a Counter**  
   - Define a counter variable `n`, initialized at zero.
   - Increment `n` each time a new marker is created.
   - Assign `n` as the marker’s `title` and display the same value alongside its coordinates.

2. **Improve Readability**  
   - Display the coordinates in a structured way.
   - Ensure each marker is clearly linked to its corresponding entry in the coordinate list.

## Experimentation

Try enhancing the visualization by:
- Using an HTML table for better formatting.
- Styling the coordinate list for improved readability.

When you're ready, switch to the next step [here](https://github.com/AugustoCiuffoletti/leafletExercise2025/tree/step-5).
