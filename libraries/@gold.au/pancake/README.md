Pancake
=======

> Pancake flattens npm packages for GOLD Design System in to a pancake directory. 

Pancake is a dependency of `@gold.au` packages.

Pancake runs on the `postinstall` hook of packages, for instance when running `npm install @gold.au/buttons` in your project, pancake will create a pancake directory in the root of your project containing the flattened assets. 
   

## Install
    
Install with npm:
    
    npm install @gold.au/pancake

Or install with Yarn: 

    yarn add @gold.au/pancake --dev


## Requirements

- npm version >= `~3.0.0`
- A `package.json` file in your root (run `npm init --yes`)


## Settings

Pancake comes with two different level of settings. Global settings can persist across projects and local settings that are project specific.


### Global settings

To change global settings run Pancake with the `--set` flag.

    npx pancake --set [settingName] [value]

|     setting     |                 value                 |  default  |
|-----------------|---------------------------------------|-----------|
|     `npmOrg`    | This is the npm org scope             | `@gold.au` |
|    `plugins`    | A switch to disable or enable plugins | `true`    |
| `ignorePlugins` | An array of plugins to be ignored     | `[]`      |

Example:

    npx pancake --set npmOrg yourOrg


### Local settings

To change local settings all you have to do is include a `pancake` object into your `package.json` file. All possible settings are stated below:

```js
{
  "name": "your-name",
  "version": "0.1.0",
  "pancake": {                       //the pancake config object
    "auto-save": true,               //enable/disable auto saving the settings into your package.json after each run
    "plugins": true,                 //enable/disable plugins
    "ignore": [],                    //ignore specific plugins
    "css": {                         //settings for the @gov.au/pancake-sass plugin
      "minified": true,              //minify the css?
      "modules": false,              //save one css file per module?
      "browsers": [                  //autoprefixer browser matrix
        "last 2 versions",
        "ie 8",
        "ie 9",
        "ie 10"
      ],
      "location": "pancake/css/",    //the location to save the css files to
      "name": "pancake.min.css"      //the name of the css file that includes all modules; set this to false to disable it
    },
    "sass": {                        //settings for the @gov.au/pancake-sass plugin
      "modules": false,              //save one Sass file per module?
      "location": "pancake/sass/",   //the location to save the Sass files to
      "name": "pancake.scss"         //the name of the Sass file that includes all modules; set this to false to disable it
    },
    "js": {                          //settings for the @gov.au/pancake-js plugin
      "minified": true,              //minify the js?
      "modules": false,              //save one js file per module?
      "location": "pancake/js/",     //the location to save the js files to
      "name": "pancake.min.js"       //the name of the js file that includes all modules; set this to false to disable it
    },
    "react": {                       //settings for the @gov.au/pancake-react plugin
      "location": "pancake/react/",  //the location to save the react files to; set this to false to disable it
    },
    "json": {                        //settings for the @gov.au/pancake-json plugin
      "enable": false,               //the pancake-json plugin is off by default
      "location": "pancake/js/",     //the location to save the json files to
      "name": "pancake",             //the name of the json file
      "content": {                   //you can curate what the json file will contain
        "name": true,                //include the name key
        "version": true,             //include the version key
        "dependencies": true,        //include the dependencies key
        "path": true,                //include the path key
        "settings": true             //include the settings key
      }
    }
  }
}
```

To remove `js` you can set the value of `"name": false` and remove the values `minified`, `modules` and `location`.


## CLI

You can display the help with `pancake --help`.


### Don’t save to package.json
`-n`, `--nosave`  
Type: `<flag>`  

The command will stop Pancake from merging your local settings, complete them with the defaults and save them into your `package.json`.
This will sort-of shrink-wrap all settings in so you are completely reproducible.
You can also opt-out of this behavior by adding `"auds": { "auto-save": false }` into your package.json.

```shell
npx pancake --nosave
```


### Overwrite npm org name
`-o`, `--org`  
Type: `<flag> [value]`  

You can temporarily overwrite the npm org scope by suppling this flag. This can be useful for testing. Do make sure to use the [settings](#settings) for a
permanent change.

```shell
npx pancake --org @otherOrg
```


### Overwrite the plugin toggle
`-p`, `--noplugins`  
Type: `<flag>`  

You can temporarily disable all plugins. This is great for ci integration.

```shell
npx pancake --noplugins
```


### Overwrite the plugin ignore list
`-i`, `--ignore`  
Type: `<flag> [comma separated list]`  

You can temporarily overwrite the list of plugins to be disabled.

```shell
npx pancake --ignore @gov.au/pancake-svg,@gov.au/pancake-js
```


### Verbose output
`-v`, `--verbose`  
Type: `<flag>`  

Run Pancake in verbose silly mode.

```shell
npx pancake --verbose
```


# };
