# developing-custom-js-apps

Configurable application template from [application-boilerplate-js](https://github.com/Esri/application-boilerplate-js)

## Go to the JSAPI to find widgets to add
[ArcGIS JS API](https://developers.arcgis.com/javascript/jsapi/)

## Add widget dependencies

### JavaScript

```javascript
"esri/dijit/Search", "esri/dijit/HomeButton", "esri/dijit/LocateButton",
```

### JavaScript

```javascript
Search, HomeButton, LocateButton
```

## Add HTML for widgets

### HTML

```html
  <div id="homebutton"></div>
  <div id="locatebutton"></div>
  <div id="search"></div>
```

## Add widgets to main
  
### JavaScript

```javascript
var hb = new HomeButton({
  map: this.map
}, "homebutton");
hb.startup();

var lb = new LocateButton({
  map: this.map
}, "locatebutton");
lb.startup();

var s = new Search({
  map: this.map
}, "search");
s.startup();
```

## Add CSS for widgets

### CSS

```css
#homebutton {
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 36;
}

#locatebutton {
  position: absolute;
  top: 142px;
  left: 20px;
  z-index: 36;
}

.HomeButton .home,
.HomeButton .home:hover,
.HomeButton .home:active,
.LocateButton .zoomLocateButton,
.LocateButton .zoomLocateButton:hover,
.LocateButton .zoomLocateButton:active {
  padding: 1px;
  background-color: #789aa0;
  background-color: rgba(120, 154, 160, 0.75);
}

#search {
  position: absolute;
  top: 20px;
  left: 80px;
  z-index: 36;
}
```

## Add App Information Panel

### HTML

```html
<div class="app-info">
  <h1 id="title"></h1>
  <div id="description"></div>
</div>
```

### JavaScript

```javascript
var title = this.config.title || this.config.itemInfo.item.title;
var description = this.config.description || this.config.itemInfo.item.description;
dom.byId("title").innerHTML = title;
dom.byId("description").innerHTML = description;
```
  
### CSS
```css
.app-info {
  position: absolute;
  z-index: 36;
  top: 20px;
  right: 20px;
  width: 300px;
  overflow: auto;
  padding: 20px;
  color: #fff;
  background-color: #789aa0;
  background-color: rgba(120, 154, 160, 0.75);
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

## Configure App Information

### Config

```javascript
"title": "",
"description":"",
```
### Customize Config

```javascript
"title": "Farm Fresh",
"description":"This heat map shows the concentration of farmers markets across the US. Use the search box to find a market by name.",
```


### More Config Properties

```javascript
"enableHomeButton": true,
"enableLocateButton": false,
"enableSearch": true,
"enableSearchButton": false,
"includeEsriLocator": true,
"includeMapLayers": true,
```

### JavaScript

```javascript
if(this.config.enableHomeButton){
  var hb = new HomeButton({
    map: this.map
  }, "homebutton");
  hb.startup();
}

if(this.config.enableLocateButton){
  var lb = new LocateButton({
    map: this.map
  }, "locatebutton");
  lb.startup();
}

if(this.config.enableSearch){
  var searchOptions = {
    addLayersFromMap: this.config.includeMapLayers,
    enableButtonMode: this.config.enableSearchButton,
    map: this.map
  };
  if(!this.config.includeEsriLocator){
    searchOptions.sources = []; 
  }
  var s = new Search(searchOptions, "search");
  s.startup();
}
```

## Configure Organization

#### 1. Create Group
  ![create group](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/create-group.png)
#### 2. Create Folder
  ![create folder](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/create-folder.png)
#### 3. Create Template Item
  ![create item](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/create-item-1.png) ![4](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/create-item-2.png)
#### 4. Share Template Item to group
  ![share item to folder](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/share-template-folder.png)
#### 5. Configure Org map to use group
  ![Configure Org map to use group](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/configure-org-1.png)
  ![Configure Org map to use group](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/configure-org-2.png)
  ![Configure Org map to use group](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/configure-org-3.png)
#### 6. Open Webmap
#### 7. Share webmap as template
  ![Share webmap as template](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/share-app-1.png)
  ![Share webmap as template](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/share-app-2.png)
  ![Share webmap as template](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/share-app-3.png)
#### 8. Configure App
  ![Configure App](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/configure-app-1.png)
  ![Configure App](https://raw.githubusercontent.com/driskull/developing-custom-js-apps/master/images/steps/configure-app-2.png)
  
## Create Configurable JSON

- [Help Documentation](http://doc.arcgis.com/en/arcgis-online/create-maps/configurable-templates.htm)
- [JSON Formatter](http://jsonformatter.curiousconcept.com/)

## Configurable JSON

```javascript
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
```