## Step 6: Organizing Markers in a Separate Layer  

In this step, we will group the user-generated point features into a dedicated layer. This will allow us to manage them more efficiently—for example, by toggling their visibility on the map.  

To achieve this, follow these steps:  

1. **Create a dedicated layer** called `markers` to store the user-generated points.  
2. **Add the layer to the map** so that new markers are automatically assigned to it.  
3. **Modify the click event handler** to ensure that each new marker is added to the `markers` layer instead of the default map layer.  
4. **Enable layer control** by adding a UI element that allows users to toggle the visibility of the `markers` layer.  

This approach keeps our map organized and makes it easy to show or hide the markers as needed.

When you're ready, switch to the next step [here](https://github.com/AugustoCiuffoletti/leafletExercise2025/tree/step-7).

