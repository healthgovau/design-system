/***************************************************************************************************************************************************************
 *
 * Plug-in for Pancake
 *
 * Move and uglify js files from pancake modules into your pancake folder
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

var _require2 = require('./js'),
    HandleJS = _require2.HandleJS,
    MinifyAllJS = _require2.MinifyAllJS;

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
  Loading.start('pancake-js', Log.verboseMode); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  var SETTINGS = {
    js: {
      minified: true,
      modules: false,
      location: 'pancake/js/',
      name: 'pancake.min.js'
    }
  }; //merging settings with host settings

  Object.assign(SETTINGS.js, settings.js);
  return new Promise(function (resolve, reject) {
    //some housekeeping
    if (typeof version !== 'string') {
      reject("Plugin pancake-js got a mismatch for the data that was passed to it! ".concat(Style.yellow("version"), " was ").concat(Style.yellow(_typeof(version)), " ") + "but should have been ".concat(Style.yellow("string")));
    }

    if (_typeof(modules) !== 'object') {
      reject("Plugin pancake-js got a mismatch for the data that was passed to it! ".concat(Style.yellow("modules"), " was ").concat(Style.yellow(_typeof(modules)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (_typeof(settings) !== 'object') {
      reject("Plugin pancake-js got a mismatch for the data that was passed to it! ".concat(Style.yellow("settings"), " was ").concat(Style.yellow(_typeof(settings)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (typeof cwd !== 'string') {
      reject("Plugin pancake-js got a mismatch for the data that was passed to it! ".concat(Style.yellow("cwd"), " was ").concat(Style.yellow(_typeof(cwd)), " ") + "but should have been ".concat(Style.yellow("string")));
    } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Settings
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    var compiledAll = []; //for collect all promises
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Iterate over each module
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    var _iterator = _createForOfIteratorHelper(modules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var modulePackage = _step.value;
        Log.verbose("JS: Building ".concat(Style.yellow(modulePackage.name))); //check if there are js files

        var jsModulePath = void 0;

        if (modulePackage.pancake['pancake-module'].js !== undefined) {
          jsModulePath = Path.normalize("".concat(modulePackage.path, "/").concat(modulePackage.pancake['pancake-module'].js.path));
        }

        if (!Fs.existsSync(jsModulePath)) {
          Log.verbose("JS: No js found in ".concat(Style.yellow(jsModulePath)));
        } else {
          Log.verbose("JS: ".concat(Style.green('⌘'), " Found Javascript files in ").concat(Style.yellow(jsModulePath)));
          var jsModuleToPath = Path.normalize("".concat(cwd, "/").concat(SETTINGS.js.location, "/").concat(modulePackage.name.split('/')[1], ".js")); //compile js and write to file depending on settings

          var jsPromise = HandleJS(jsModulePath, SETTINGS.js, jsModuleToPath, "".concat(modulePackage.name, " v").concat(modulePackage.version))["catch"](function (error) {
            Log.error(error);
          });
          compiledAll.push(jsPromise); //collect all js promises so we can save the SETTINGS.js.name file later
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (modules.length < 1) {
      Loading.stop('pancake-js', Log.verboseMode); //stop loading animation

      Log.info("No pancake modules found \uD83D\uDE2C");
      resolve(SETTINGS);
    } else {
      //write SETTINGS.js.name file
      if (SETTINGS.js.name !== false) {
        compiledAll.push(MinifyAllJS(version, compiledAll, SETTINGS.js, cwd)["catch"](function (error) {
          Log.error(error);
        }));
      } //after all files have been compiled and written


      Promise.all(compiledAll)["catch"](function (error) {
        Loading.stop('pancake-js', Log.verboseMode); //stop loading animation

        Log.error("Js plugin ran into an error: ".concat(error));
      }).then(function () {
        Log.ok('JS PLUGIN FINISHED');
        Loading.stop('pancake-js', Log.verboseMode); //stop loading animation

        resolve(SETTINGS);
      });
    }
  });
};