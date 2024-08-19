/***************************************************************************************************************************************************************
 *
 * Plug-in for Pancake
 *
 * Generate a json file from all pancake modules.
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
  Loading.start('pancake-json', Log.verboseMode); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  var SETTINGS = {
    json: {
      enable: false,
      location: 'pancake/',
      name: 'pancake',
      content: {
        name: true,
        version: true,
        dependencies: true,
        path: true,
        settings: true
      }
    }
  }; //merging settings with host settings

  Object.assign(SETTINGS.json, settings.json);

  if (typeof settings.json === 'undefined') {
    settings.json = {};
  }

  Object.assign(SETTINGS.json.content, settings.json.content);
  return new Promise(function (resolve, reject) {
    //some housekeeping
    if (typeof version !== 'string') {
      reject("Plugin pancake-json got a mismatch for the data that was passed to it! ".concat(Style.yellow("version"), " was ").concat(Style.yellow(_typeof(version)), " ") + "but should have been ".concat(Style.yellow("string")));
    }

    if (_typeof(modules) !== 'object') {
      reject("Plugin pancake-json got a mismatch for the data that was passed to it! ".concat(Style.yellow("modules"), " was ").concat(Style.yellow(_typeof(modules)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (_typeof(settings) !== 'object') {
      reject("Plugin pancake-json got a mismatch for the data that was passed to it! ".concat(Style.yellow("settings"), " was ").concat(Style.yellow(_typeof(settings)), " ") + "but should have been ".concat(Style.yellow("object")));
    }

    if (typeof cwd !== 'string') {
      reject("Plugin pancake-json got a mismatch for the data that was passed to it! ".concat(Style.yellow("cwd"), " was ").concat(Style.yellow(_typeof(cwd)), " ") + "but should have been ".concat(Style.yellow("string")));
    } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Promise loop
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    var JSONOutput = {}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Iterate over each module
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (SETTINGS.json.enable) {
      var _iterator = _createForOfIteratorHelper(modules),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var modulePackage = _step.value;
          Log.verbose("JSON: Building ".concat(Style.yellow(modulePackage.name)));
          JSONOutput[modulePackage.name] = {};

          if (SETTINGS.json.content.name) {
            JSONOutput[modulePackage.name].name = modulePackage.name;
          }

          if (SETTINGS.json.content.version) {
            JSONOutput[modulePackage.name].version = modulePackage.version;
          }

          if (SETTINGS.json.content.dependencies) {
            JSONOutput[modulePackage.name].dependencies = modulePackage.peerDependencies;
          }

          if (SETTINGS.json.content.path) {
            JSONOutput[modulePackage.name].path = modulePackage.path;
          }

          if (SETTINGS.json.content.settings) {
            JSONOutput[modulePackage.name].settings = modulePackage.pancake['pancake-module'];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (Object.keys(JSONOutput).length > 0) {
        var jsonPath = Path.normalize("".concat(cwd, "/").concat(SETTINGS.json.location, "/").concat(SETTINGS.json.name, ".json"));
        WriteFile(jsonPath, JSON.stringify(JSONOutput)) //write the generated content to file and return its promise
        ["catch"](function (error) {
          Log.error(error);
          reject(error);
        }).then(function () {
          Log.ok('JSON PLUGIN FINISHED');
          Loading.stop('pancake-json', Log.verboseMode); //stop loading animation

          resolve(SETTINGS);
        });
      } else {
        Loading.stop('pancake-json', Log.verboseMode); //stop loading animation

        Log.info("No pancake modules found \uD83D\uDE2C");
        resolve(SETTINGS);
      }
    } else {
      Log.ok('JSON PLUGIN DISABLED');
      Loading.stop('pancake-json', Log.verboseMode); //stop loading animation

      resolve(SETTINGS);
    }
  });
};