{
  "configurationSettings": [
    {
      "category": "<b>Configure template</b>",
      "fields": [
        {
          "type": "webmap"
        },
        {
          "type": "string",
          "fieldName": "title",
          "label": "Title",
          "tooltip": "",
          "stringFieldOption": "textbox",
          "placeHolder": "My awesome app"
        },
        {
          "type": "string",
          "fieldName": "description",
          "label": "Description",
          "tooltip": "",
          "stringFieldOption": "richtext",
          "placeHolder": "Awesome description"
        },
        {
          "type": "boolean",
          "fieldName": "enableLocateButton",
          "label": "Enable LocateButton",
          "tooltip": ""
        },
        {
          "type": "boolean",
          "fieldName": "enableHomeButton",
          "label": "Enable HomeButton",
          "tooltip": ""
        }
      ]
    },
    {
      "category": "<b>Configure Search</b>",
      "fields": [
        {
          "type": "boolean",
          "fieldName": "enableSearch",
          "label": "Enable Search",
          "tooltip": ""
        },
        {
          "type": "boolean",
          "fieldName": "enableSearchButton",
          "label": "Enable Button Mode",
          "tooltip": ""
        },
        {
          "type": "boolean",
          "fieldName": "includeEsriLocator",
          "label": "Include Esri Locator",
          "tooltip": ""
        },
        {
          "type": "boolean",
          "fieldName": "includeMapLayers",
          "label": "Include Map Layers",
          "tooltip": ""
        }
      ]
    }
  ],
  "values": {
    "title": "",
    "description": "",
    "enableHomeButton": true,
    "enableLocateButton": false,
    "enableSearch": true,
    "enableSearchButton": false,
    "includeEsriLocator": true,
    "includeMapLayers": true
  }
}