COSA Events

Edit events.json to include an event. Add a new array item with the following attributes:

- **title** (required) - short name of the event
- **type** (required) - event type. Possible values: webinar, conference, hackathon, workshop, other
- **description** (required) - name of a markup file with event description
- **logo** (optional) - name of an image file or URL used as a logo for the event
- **startDate** - event start date in format YYYY-MM-DD (2000-12-31). After that date event will become inactive if end date is not specified.
- **endDate** (optional) - event end date in format YYYY-MM-DD (2000-12-31). After that date event will become inactive