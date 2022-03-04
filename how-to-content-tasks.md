# How to instructions to manage content updates

## Add new application

**This needs technical background!** Currently we need to convert the YAML file to JSON files manually. Please reach out to Dmitry or Katja in this case if you are not sure.

* Create a new folder in src/assets/projects/`<projectname>`
* Copy the following files `<projectname>.yaml` and `logo.png`
* Create JSON representation of the yaml file: `<projectname>.json`
* Update `src/assets/projects/projects.json` to include the new tool

## Adopt content of general files

The content of the homepage is managed through markdown files, which is an easy to modify type. The general files are located in `src/assets/content/`. Open a markdown file, e.g. "other_os.md" and edit as required. 

Markdown can easily be previewed when edited. Please checkout [markdown cheat sheets](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting hints if you are not familar.

## Create / Adopt Events

The event files are located in `src/assets/events/`.

Edit events.json to include an event. Add a new array item with the following attributes:

- **title** (required) - short name of the event
- **type** (required) - event type. Possible values: webinar, conference, hackathon, other
- **description** (required) - name of a markup file with event description
- **logo** (optional) - name of an image file or URL used as a logo for the event
- **startDate** - event start date in format YYYY-MM-DD (2000-12-31). After that date event will become inactive if end date is not specified.
- **endDate** (optional) - event end date in format YYYY-MM-DD (2000-12-31). After that date event will become inactive

Create also the **description** markdown file containing the event content.