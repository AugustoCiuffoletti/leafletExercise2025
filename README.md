This is a step-by-step tutorial on Leaflet that will guide you through the implementation of a functional web app.  
To follow the mini-tutorial, visit this [link](https://stackblitz.com/edit/dhss2021).  
There, you will find the IDE to browse and modify the code, along with README files that illustrate the step-by-step progression.

## Step 1: Displaying a Map

The first step consists of rendering a simple map on the webpage.

1. Add a `<div>` element in the HTML file where the map will be displayed.  
2. Include links to the Leaflet library and a CSS file for styling.  
3. In `index.js`, initialize the map using the Leaflet library (`L` is the alias for Leaflet in the code).  
4. Use the `.map()` method to create a map inside the specified `<div>`. The method takes options such as:  
   - The initial center coordinates of the map  
   - The zoom level  
   - The tile source for the raster layer  

Once the map is displayed, you can drag and zoom in/out using your mouse.

## Experimentation

Explore the [Leaflet documentation](https://leafletjs.com/) to experiment with additional map options.  
Modify the settings in `index.js` to test different configurations.

## Next Step

When you're ready, switch to the `popup` branch to move on to the next step.
