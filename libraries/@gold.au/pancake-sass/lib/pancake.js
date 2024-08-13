/***************************************************************************************************************************************************************
 *
 * Plug-in for Pancake
 *
 * Move and compile Sass partials.
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Path = require('path');

var Fs = require('fs'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Module imports
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('@gold.au/pancake'),
    Log = _require.Log,
    Style = _require.Style,
    Loading = _require.Loading,
    ReadFile = _require.ReadFile,
    WriteFile = _require.WriteFile;

var _require2 = require('./helpers'),
    StripDuplicateLines = _require2.StripDuplicateLines;

var _require3 = require('./sass'),
    GenerateSass = _require3.GenerateSass,
    Sassify = _require3.Sassify;

Log.output = true; //this plugin assumes you run it through pancake
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Plugin export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * The main pancake method for this plugin
 *
 * @param  {array}  version        - The version of mother pancake
 * @param  {array}  modules        - An array of all module objects
 * @param  {object} settings       - An object of the host package.json file and it’s path
 * @param  {object} GlobalSettings - An object of the global settings
 * @param  {object} cwd            - The path to the working directory of our host package.json file
 *
 * @return {Promise object}  - Returns an object of the settings we want to save
 */

module.exports.pancake = function (version, modules, settings, GlobalSettings, cwd) {
  Loading.start('pancake-sass', Log.verboseMode); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  var SETTINGS = {
    css: {
      minified: true,
      modules: false,
      browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10'],
      location: 'pancake/css/',
      name: 'pancake.min.css'
    },
    sass: {
      modules: false,
      location: 'pancake/sass/',
      name: 'pancake.scss'
    }
  }; //merging settings with host settings

  Object.assign(SETTINGS.css, settings.css);
  Object.assign(SETTINGS.sass, settings.sass);
  return new Promise(function (resolve, reject) {
    //some housekeeping
    if (typeof version !== 'string') {
      reject("Plugin pancake-sass got a mismatch for the data that was passed to it! ".concat(Style.yellow("version"), " was ").concat(Style.yellow(_typeof(version)), " ") + "but should have been ".concat(Style.yellow("string")));
    }

    if (_typeof(modules) !== 'object') {
      reject("Plugin pancake-sass got a mismatch for the data that was passed to it! ".concat(Style.yellow("modules"), " was ").concat(Style.yellow(_typeof(modules)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (_typeof(settings) !== 'object') {
      reject("Plugin pancake-sass got a mismatch for the data that was passed to it! ".concat(Style.yellow("settings"), " was ").concat(Style.yellow(_typeof(settings)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (typeof cwd !== 'string') {
      reject("Plugin pancake-sass got a mismatch for the data that was passed to it! ".concat(Style.yellow("cwd"), " was ").concat(Style.yellow(_typeof(cwd)), " ") + "but should have been ".concat(Style.yellow("string")));
    } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Variables to be filled
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    var compiledAll = []; //for collect all promises

    var allSass = ''; //all modules to be collected for SETTINGS.css.name file

    var sassVersioning = true; //let’s assume the pancake module was build with sass-versioning

    var sassVersioningPath = Fs.existsSync(Path.normalize("".concat(cwd, "/../node_modules/sass-versioning"))) ? Path.normalize("".concat(cwd, "/../node_modules/sass-versioning/dist/_index.scss")).replace(/\\/g, "\\\\") : Path.normalize("".concat(cwd, "/node_modules/sass-versioning/dist/_index.scss")).replace(/\\/g, "\\\\");

    var Package = require(Path.normalize("".concat(__dirname, "/../package.json")));

    var banner = "/*! PANCAKE v".concat(version, " PANCAKE-SASS v").concat(Package.version, " */\n\n") + "/*\n" + " * THIS FILE IS AUTOGENERATED EVERY TIME YOU INSTALL A PANCAKE MODULE.\n" + " * DO NOT EDIT THIS FILE AND AVOID COMMITTING IT TO VERSION CONTROL.\n */\n\n"; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Iterate over each module
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    var _iterator = _createForOfIteratorHelper(modules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var modulePackage = _step.value;
        Log.verbose("Sass: Building ".concat(Style.yellow(modulePackage.name))); //check if there are sass files

        var sassModulePath = void 0;

        if (modulePackage.pancake['pancake-module'].sass !== undefined && modulePackage.pancake['pancake-module'].sass.path !== false) {
          sassModulePath = Path.normalize("".concat(modulePackage.path, "/").concat(modulePackage.pancake['pancake-module'].sass.path));
        }

        if (!Fs.existsSync(sassModulePath)) {
          Log.verbose("Sass: No Sass found in ".concat(Style.yellow(sassModulePath)));
        } else {
          Log.verbose("Sass: ".concat(Style.green('⌘'), " Found Sass files in ").concat(Style.yellow(sassModulePath))); //generate the import statements depending on dependencies

          var sass = GenerateSass(modulePackage.path, modulePackage.name, modules, GlobalSettings.npmOrg);
          allSass += sass; //for SETTINGS.css.name file
          // adding banner and conditional sass-versioning

          if (modulePackage.pancake['pancake-module'].sass['sass-versioning'] === true) {
            sassVersioning = true; //setting this if we encounter at least one module with sass-versioning enabled

            sass = "".concat(banner) + "/* ".concat(modulePackage.name, " v").concat(modulePackage.version, " */\n\n") + "@import \"".concat(sassVersioningPath, "\";\n\n") + "".concat(sass, "\n");
          } else {
            sass = "/* ".concat(modulePackage.name, " v").concat(modulePackage.version, " */\n\n").concat(sass, "\n");
          } //write css file


          if (SETTINGS.css.modules) {
            var location = Path.normalize("".concat(cwd, "/").concat(SETTINGS.css.location, "/").concat(modulePackage.name.split('/')[1], ".css"));
            compiledAll.push(Sassify(location, SETTINGS.css, sass) //generate css and write file
            ["catch"](function (error) {
              Log.error(error);
            }));
          } //write sass file


          if (SETTINGS.sass.modules) {
            var _location = Path.normalize("".concat(cwd, "/").concat(SETTINGS.sass.location, "/").concat(modulePackage.name.split('/')[1], ".scss"));

            compiledAll.push(WriteFile(_location, sass) //write file
            ["catch"](function (error) {
              Log.error(error);
              process.exit(1);
            }));
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (modules.length < 1) {
      Loading.stop('pancake-sass', Log.verboseMode); //stop loading animation

      Log.info("No pancake modules found \uD83D\uDE2C");
      resolve(SETTINGS);
    } else {
      //write the SETTINGS.css.name file
      var locationCSS = Path.normalize("".concat(cwd, "/").concat(SETTINGS.css.location, "/").concat(SETTINGS.css.name));

      if (sassVersioning === true) {
        allSass = "".concat(banner) + "@import \"".concat(sassVersioningPath, "\";\n\n") + "".concat(StripDuplicateLines(allSass), "\n\n");
      } else {
        allSass = "".concat(banner).concat(StripDuplicateLines(allSass), "\n");
      } //generate SETTINGS.css.name file


      if (SETTINGS.css.name !== false) {
        compiledAll.push(Sassify(locationCSS, SETTINGS.css, allSass)["catch"](function (error) {
          Log.error(error);
        }));
      } //write SETTINGS.sass.name file


      if (SETTINGS.sass.name !== false) {
        var locationSASS = Path.normalize("".concat(cwd, "/").concat(SETTINGS.sass.location, "/").concat(SETTINGS.sass.name));
        compiledAll.push(WriteFile(locationSASS, allSass) //write file
        ["catch"](function (error) {
          Log.error(error);
          process.exit(1);
        }));
      } //after all files have been compiled and written


      Promise.all(compiledAll)["catch"](function (error) {
        Loading.stop('pancake-sass', Log.verboseMode); //stop loading animation

        Log.error("Sass plugin ran into an error: ".concat(error));
      }).then(function () {
        Log.ok('SASS PLUGIN FINISHED');
        Loading.stop('pancake-sass', Log.verboseMode); //stop loading animation

        resolve(SETTINGS);
      });
    }
  });
};