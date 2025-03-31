# Step 2: Managing Map Events

The *Leaflet* library allows handling various types of events, including those triggered by the mouse. The most basic one is the *click* event.

## Handling a Click Event

To capture and handle a map event, we use the `.on()` method applied to the map. This method takes two parameters:  
1. The event type to listen for (`"click"` in our case).  
2. A function that receives the event details as a parameter.  

Following best practices, we use the arrow function syntax for the event handler. The function itself consists of a single `alert` statement, which extracts and displays the click coordinates from the event object.

## Experimentation

Try modifying the code to:
- Create a marker at the clicked position.
- Attach a popup to the marker displaying the coordinates.
- Explore other mouse events supported by Leaflet.
- Inspect the event object properties using the [Leaflet documentation](https://leafletjs.com/reference.html#map-event).

## Next Step

When you're ready, switch to the next step [here](https://github.com/AugustoCiuffoletti/leafletExercise2025/tree/step-3).
