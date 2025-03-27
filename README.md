# Step 5: Storing Coordinates in a Data Structure

At this stage, the coordinates are displayed in the user interface, allowing users to copy and paste them manually. However, they are not yet available for processing within the application. In this step, we will store the coordinates in an array.

## Implementing an Array for Coordinate Storage

1. **Declare an Array**  
   - At the top of the JavaScript file, define an empty array to store the coordinates.  
   - An array is an ordered data structure, making it a natural fit for managing our list of markers.

2. **Refreshing the Display**  
   - Unlike the previous step, where we incrementally updated the list, we now want to **fully refresh** the display whenever the array is modified.  
   - To achieve this, we write a function that:
     - Clears the `div` before repopulating it.
     - Iterates through the array, adding a new line for each stored coordinate.
     - Displays an index (starting from 1) alongside each coordinate.

3. **Simplifying the Click Event Handler**  
   - The function handling mouse clicks is now simpler, as the responsibility of constructing the coordinate list has been moved to the new display function.  
   - When a user clicks on the map:
     - The new coordinates are **pushed** into the array.
     - The display function is called to refresh the list.

## Next Steps: Data Persistence

Currently, the data is **volatile**—reloading the page clears all stored coordinates. To ensure persistence and enable data sharing, we need cloud storage. This will be the focus of the next step in the `createStorage` branch.
