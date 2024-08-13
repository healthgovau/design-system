/***************************************************************************************************************************************************************
 *
 * Install and run plugins
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

var Path = require('path');

var Fs = require('fs'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style,
    Loading = _require.Loading;

var _require2 = require('./helpers'),
    Spawning = _require2.Spawning; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Check if plugins exist and install if not
 *
 * @param  {array}  plugins  - An array of plugin names
 * @param  {string} cwd      - The path to our working directory
 *
 * @return {promise object}  - Return an object listing plugins installed and plugins found
 */


module.exports.InstallPlugins = function (plugins, cwd) {
  var result = {
    found: [],
    installing: []
  };
  var output = false; //switch output of child process to stdout

  return new Promise(function (resolve, reject) {
    //go through all plugins
    plugins.map(function (plugin) {
      try {
        if (Fs.existsSync(Path.normalize("".concat(cwd, "/../node_modules/").concat(plugin)))) {
          require(Path.normalize("".concat(cwd, "/../node_modules/").concat(plugin)));
        } else {
          require(Path.normalize("".concat(cwd, "/node_modules/").concat(plugin)));
        }

        result.found.push(plugin);
      } catch (error) {
        result.installing.push(plugin);
      }
    });

    if (result.installing.length > 0) {
      Log.info("INSTALLING ".concat(result.installing.join(', '))); //get the config so we can return them to what they were

      var cacheLockStale = Spawning.sync('npm', ['config', 'get', 'cache-lock-stale']).stdout.toString().trim();
      var cacheLockWait = Spawning.sync('npm', ['config', 'get', 'cache-lock-wait']).stdout.toString().trim();
      Log.verbose("npm config was cache-lock-stale: ".concat(Style.yellow(cacheLockStale), " cache-lock-wait: ").concat(Style.yellow(cacheLockWait))); //setting new config for just this install to not wait too long for the lockfiles

      Spawning.sync('npm', ['config', 'set', 'cache-lock-stale', '10']);
      Spawning.sync('npm', ['config', 'set', 'cache-lock-wait', '10']); //checking if we got yarn installed
      // const command = Spawning.sync( 'yarn', [ '--version' ] );
      // const hasYarn = command.stdout && command.stdout.toString().trim() ? true : false;

      var hasYarn = false; //disabled yarn as it has some issues

      if (!output) {
        Loading.start(); //waiting with loading to after the blocking child processes
      }

      Log.verbose("Yarn ".concat(Style.yellow(hasYarn ? 'was' : 'was not'), " detected"));
      var installing; //for spawning our install process

      if (output) {
        Loading.stop();
        Log.space();
      } //options for our child process


      var spawnOpt = {
        cwd: cwd
      };

      if (output) {
        spawnOpt = {
          cwd: cwd,
          stdio: 'inherit'
        };
      } //installing modules


      if (hasYarn) {
        Spawning.async('yarn', ['add'].concat(_toConsumableArray(result.installing)), spawnOpt)["catch"](function (error) {
          Loading.stop(); //return npm config to what it was before

          Spawning.sync('npm', ['config', 'set', 'cache-lock-stale', cacheLockStale]);
          Spawning.sync('npm', ['config', 'set', 'cache-lock-wait', cacheLockWait]);
          Log.error("Installing plugins failed");
          reject(error);
        }).then(function (data) {
          //return npm config to what it was before
          Spawning.sync('npm', ['config', 'set', 'cache-lock-stale', cacheLockStale]);
          Spawning.sync('npm', ['config', 'set', 'cache-lock-wait', cacheLockWait]);
          resolve(result);
        });
      } else {
        Spawning.async('npm', ['install', '--no-progress', '--save'].concat(_toConsumableArray(result.installing)), spawnOpt)["catch"](function (error) {
          Loading.stop(); //return npm config to what it was before

          Spawning.sync('npm', ['config', 'set', 'cache-lock-stale', cacheLockStale]);
          Spawning.sync('npm', ['config', 'set', 'cache-lock-wait', cacheLockWait]);
          Log.error("Installing plugins failed");
          reject(error);
        }).then(function (data) {
          if (output) {
            Log.space();
          } //return npm config to what it was before


          Spawning.sync('npm', ['config', 'set', 'cache-lock-stale', cacheLockStale]);
          Spawning.sync('npm', ['config', 'set', 'cache-lock-wait', cacheLockWait]);
          resolve(result);
        });
      }
    } else {
      resolve(result);
    }
  });
};
/**
 * Run a bunch of plugins
 *
 * @param  {string} version       - The version of mother pancake
 * @param  {array}  plugins       - An array of plugin names
 * @param  {string} cwd           - The path to our working directory
 * @param  {array}  allModules    - An array of all modules to be passed to plugin
 * @param  {object} SETTINGSlocal - The object of our local settings
 * @param  {object} SETTINGS      - The global settings object
 *
 * @return {promise object}       - Pass on what the plugins returned
 */


module.exports.RunPlugins = function (version, plugins, cwd, allModules, SETTINGSlocal, SETTINGS) {
  Loading.stop();
  var plugin;
  var running = [];
  return new Promise(function (resolve, reject) {
    //go through all plugins
    var allPlugins = plugins.map(function (plugin) {
      Log.info("ADDING TOPPINGS TO YOUR PANCAKE VIA ".concat(plugin));

      if (Fs.existsSync(Path.normalize("".concat(cwd, "/../node_modules/").concat(plugin)))) {
        plugin = require(Path.normalize("".concat(cwd, "/../node_modules/").concat(plugin)));
      } else {
        plugin = require(Path.normalize("".concat(cwd, "/node_modules/").concat(plugin)));
      }

      return plugin.pancake(version, allModules, SETTINGSlocal, SETTINGS, cwd) //run ’em
      ["catch"](function (error) {
        Log.error(error);
        process.exit(1);
      });
    });
    Promise.all(allPlugins)["catch"](function (error) {
      Log.error(error);
      process.exit(1);
    }).then(function (data) {
      Loading.start();
      return resolve(data); //resolve only after all plugins have run
    });
  });
};