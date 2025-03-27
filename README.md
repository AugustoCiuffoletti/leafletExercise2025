# Step 3: Recording Coordinates in the Interface

JavaScript can interact with the HTML page through the DOM. In this step, we enable users to place multiple markers while keeping their coordinates visible on the screen.

## Displaying Marker Coordinates

Each marker will be placed with a mouse click, and its corresponding coordinates will be displayed beneath the map.

To achieve this:
1. **Modify the HTML**  
   - Add a new `<div>` element where the coordinates will be displayed.

2. **Update the JavaScript Code**  
   - Modify the function handling the click event:
     - The first line creates and displays a new marker at the clicked position.
     - The second line appends the marker's coordinates to the designated `<div>`.  
     - Longitude and latitude are extracted from the event object and rounded to five decimal places for readability.

## Experimentation

Enhance the visualization by:
- Formatting the coordinates in an HTML table.
- Adding progressive numbering to associate each marker with its coordinates (and vice versa).  

This numbering improvement is covered in the next step, which you can find in the `idList` branch.
