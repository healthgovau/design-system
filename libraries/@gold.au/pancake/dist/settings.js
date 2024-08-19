/***************************************************************************************************************************************************************
 *
 * Get and set global/local settings
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Path = require('path');

var Fs = require('fs'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style;

var _require2 = require('./files'),
    WriteFile = _require2.WriteFile; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Finding the right folder in which to run npm prefix
 *
 * @return {string} - The absolute path to the folder of your host package.json
 */


module.exports.Settings = {
  /**
   * Getting global setting from the settings.json file
   *
   * @return {object} - The settings object
   */
  GetGlobal: function GetGlobal() {
    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __dirname;
    Log.verbose("Getting global settings from ".concat(Style.yellow(Path.normalize("".concat(root, "/../settings.json")))));
    var SETTINGS = {};

    try {
      SETTINGS = JSON.parse(Fs.readFileSync(Path.normalize("".concat(root, "/../settings.json")), "utf8"));
    } catch (error) {
      Log.error("Couldn\u2019t read global settings :(");
      Log.space();
      process.exit(1);
    }

    Log.verbose(Style.yellow(JSON.stringify(SETTINGS)));
    return SETTINGS;
  },

  /**
   * Getting local setting from the host package.json file
   *
   * @param  {string} cwd - The path to our host package.json
   *
   * @return {object}     - The settings object
   */
  GetLocal: function GetLocal(cwd) {
    Log.verbose("Getting local settings");
    var SETTINGS = {};

    try {
      SETTINGS = JSON.parse(Fs.readFileSync(Path.normalize("".concat(cwd, "/package.json")), "utf8"));
    } catch (error) {
      Log.error("Couldn\u2019t read local settings :(");
      Log.error("Make sure you have a package.json file availabe in the root of your project.");
      Log.error(error);
      Log.space();
      process.exit(1);
    }

    if (SETTINGS.pancake === undefined) {
      SETTINGS.pancake = {};
    } //default settings


    var defaultSettings = {
      'auto-save': true,
      plugins: true,
      ignore: []
    }; //merging default settings with local package.json

    SETTINGS.pancake = Object.assign(defaultSettings, SETTINGS.pancake);
    Log.verbose(Style.yellow(JSON.stringify(SETTINGS.pancake)));
    return SETTINGS.pancake;
  },

  /**
   * Writing new global settings to the settings.json file
   *
   * @param  {object} SETTINGS - The settings object so we don’t have to read it twice
   * @param  {array}  items    - The setting to be changed, first item is the name and the following the values
   *
   * @return {object}          - The settings object with the new setting
   */
  SetGlobal: function SetGlobal(root, SETTINGS) {
    Log.info("PANCAKE SAVING DEFAULT SETTING");

    for (var _len = arguments.length, items = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      items[_key - 2] = arguments[_key];
    }

    var setting = items[0];
    var value = items.splice(1);

    if (SETTINGS[setting] !== undefined) {
      //setting new value
      if (_typeof(SETTINGS[setting]) === 'object') {
        var _SETTINGS$setting;

        (_SETTINGS$setting = SETTINGS[setting]).push.apply(_SETTINGS$setting, _toConsumableArray(value));
      }

      if (typeof SETTINGS[setting] === 'boolean') {
        SETTINGS[setting] = value === "true";
      }

      if (typeof SETTINGS[setting] === 'string') {
        SETTINGS[setting] = value.toString();
      }

      try {
        Fs.writeFileSync(Path.normalize("".concat(root, "/../settings.json")), JSON.stringify(SETTINGS, null, '\t'), 'utf8');
        Log.ok("Value for ".concat(Style.yellow(setting), " saved"));
      } catch (error) {
        Log.error("Saving settings failed");
        Log.error(error);
      }
    } else {
      Log.error("Setting ".concat(Style.yellow(setting), " not found"));
    }
  },

  /**
   * Writing local settings to the package.json file
   *
   * @param  {object} SETTINGS - The settings object to be written
   * @param  {string} pkgPath  - The path to the package.json file
   *
   * @return {Promise object}  - The settings object with the new setting
   */
  SetLocal: function SetLocal(SETTINGS, pkgPath) {
    Log.info("PANCAKE SAVING LOCAL SETTINGS");
    return new Promise(function (resolve, reject) {
      var PackagePath = Path.normalize("".concat(pkgPath, "/package.json"));
      var PKGsource;
      var PKG;

      try {
        PKGsource = Fs.readFileSync(PackagePath, "utf8");
        PKG = JSON.parse(PKGsource);
        Log.verbose("Read settings at ".concat(Style.yellow(PackagePath)));
      } catch (error) {
        Log.verbose("No package.json found at ".concat(Style.yellow(PackagePath)));
      } //only save stuff if we have a package.json file to write to


      if (PKGsource.length > 0) {
        //detect indentation
        var _isSpaces;

        var indentation = 2; //default indentation even though you all should be using tabs for indentation!

        try {
          var PKGlines = PKGsource.split('\n');
          _isSpaces = PKGlines[1].startsWith('  ');
        } catch (error) {
          _isSpaces = true; //buuuhhhhhh 👎
        }

        if (!_isSpaces) {
          indentation = '\t'; //here we go!
        }

        PKG.pancake = SETTINGS; //set our settings

        WriteFile(PackagePath, JSON.stringify(PKG, null, indentation)) //write to package.json
        ["catch"](function (error) {
          Log.error(error);
          reject(error);
        }).then(function (written) {
          resolve(SETTINGS);
        });
      }
    });
  }
};