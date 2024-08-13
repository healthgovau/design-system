/***************************************************************************************************************************************************************
 *
 * Returning ansi escape color codes
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

var Spawn = require('child_process');

var Path = require('path');

var TTY = require('tty');

var OS = require('os'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Module imports
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Check npm version
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Check that npm used is 3 and above
 *
 * @return {boolean} - Whether npm version is satisfied
 */


module.exports.CheckNPM = function () {
  var npmVersion = Spawning.sync('npm', ['-v']);

  if (npmVersion.error) {
    Log.error("Pancake was unable to find an NPM version.");
    Log.error(error);
    Log.space();
    process.exit(1);
  } else {
    npmVersion = parseInt(npmVersion.stdout.toString().replace('\n', '')); //normalize some oddities npm gives us
  }

  Log.verbose("NPM version ".concat(Style.yellow(npmVersion), " detected")); //npm 3 and higher is required as below will install dependencies inside each module folder

  if (npmVersion < 3) {
    return false;
  } else {
    return true;
  }
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Finding CWD
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Find the current working directory by checking inside the current directory for a package.json and see if it is a pancake module.
 * If it is then we go to the parent folder and run `npm prefix` there. Otherwise run `npm prefix` in the current working directory.
 *
 * @param  {string} cwd - Path to current working directory
 *
 * @return {string} - The absolute path to the folder of your host package.json
 */


module.exports.Cwd = function () {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();
  Log.verbose("Looking for cwd in ".concat(Style.yellow(cwd)));
  var rootPath;
  var pkgPath; //let’s find the package.json and check if it's a valid one

  try {
    var location = Path.normalize("".concat(cwd, "/package.json")); //on this level

    var testingPkg = require(location);

    if (testingPkg.pancake['pancake-module'] !== undefined) {
      //this package.json has an pancake-module object
      Log.verbose("Found valid pancake-module packages in ".concat(Style.yellow(cwd)));
      rootPath = Path.normalize("".concat(cwd, "/../")); //so let’s go down one level and look for the next package.json file

      pkgPath = Spawning.sync('npm', ['prefix'], {
        cwd: rootPath
      }); //this will find the nearest package.json

      if (pkgPath.error) {
        Log.error("Pancake was unable to find a folder with a package.json file from ".concat(Style.yellow(rootPath), "."));
        Log.space();
        process.exit(1);
      } else {
        pkgPath = Path.normalize(pkgPath.stdout.toString().replace('\n', '')); //normalize some oddities npm gives us
      }
    } else {
      //not a valid pancake module
      Log.verbose("Package.json not a pancake-module in ".concat(Style.yellow(location)));
      pkgPath = Path.normalize("".concat(cwd, "/")); //we start looking from here on for the next package.json
    }
  } catch (error) {
    //no package.json found in this folder
    Log.verbose("No package.json found in ".concat(Style.yellow(cwd)));
    rootPath = Path.normalize("".concat(cwd, "/")); //we start looking from here on for the next package.json

    pkgPath = Spawning.sync('npm', ['prefix'], {
      cwd: rootPath
    }); //this will find the nearest package.json

    if (pkgPath.error) {
      Log.error("Pancake was unable to find a folder with a package.json file from ".concat(Style.yellow(rootPath), "."));
      Log.space();
      process.exit(1);
    } else {
      pkgPath = Path.normalize(pkgPath.stdout.toString().replace('\n', '')); //normalize some oddities npm gives us
    }
  }

  Log.verbose("Cwd is ".concat(Style.yellow(pkgPath)));
  return pkgPath;
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get cli window size
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Get the size of the cli window
 * A port from https://github.com/jonschlinkert/window-size
 *
 * @return {object} - An object with width and height
 */


module.exports.Size = function () {
  var width;
  var height;

  if (TTY.isatty(1)) {
    if (process.stdout.getWindowSize) {
      width = process.stdout.getWindowSize(1)[0];
      height = process.stdout.getWindowSize(1)[1];
    } else if (TTY.getWindowSize) {
      width = TTY.getWindowSize()[1];
      height = TTY.getWindowSize()[0];
    } else if (process.stdout.columns && process.stdout.rows) {
      height = process.stdout.rows;
      width = process.stdout.columns;
    }
  } else if (OS.release().startsWith('10')) {
    var numberPattern = /\d+/g;
    var cmd = 'wmic path Win32_VideoController get CurrentHorizontalResolution,CurrentVerticalResolution';
    var code = Spawn.execSync(cmd).toString('utf8');
    var res = code.match(numberPattern);
    return {
      height: ~~res[1],
      width: ~~res[0]
    };
  } else {
    return {
      height: undefined,
      width: undefined
    };
  }

  return {
    height: height,
    width: width
  };
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Spawning new processes cross os
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Spawning child processes in an abstraction so we can handle different OS
 *
 * @type {Object}
 */


var Spawning = {
  isWin: /^win/.test(process.platform),
  //sniffing the os, Can’t use os.platform() as we want to support node 5

  /**
   * Spawning async
   *
   * @param  {string}  command - The program we run
   * @param  {array}   options - the flags and options we pass to it
   * @param  {object}  param   - Parameters we pass to child_process
   *
   * @return {Promise object}  - The error code returned from child_process.spawn
   */
  async: function async(command, options) {
    var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Log.verbose("Spawning async ".concat(Style.yellow("".concat(command, " ").concat(_toConsumableArray(options).join(' '))), " with ").concat(Style.yellow(JSON.stringify(param))));
    return new Promise(function (resolve, reject) {
      var operation;
      var error = ""; //gather errors

      if (Spawning.isWin) {
        operation = Spawn.spawn('cmd.exe', ['/s', '/c', command].concat(_toConsumableArray(options)), param);
      } else {
        operation = Spawn.spawn(command, _toConsumableArray(options), param);
      }

      if (operation.stderr) {
        //if we even have an output
        operation.stderr.on('data', function (error) {
          error += error; //add to error object
        });
      }

      operation.on('close', function (code) {
        if (code !== 0) {
          reject(error.toString()); //ignore warnings
        } else {
          resolve(code);
        }
      });
    });
  },

  /**
   * Spawning sync
   *
   * @param  {string}  command - The program we run
   * @param  {array}   options - the flags and options we pass to it
   * @param  {object}  param   - Parameters we pass to child_process
   *
   * @return {object}          - The object returned from child_process.spawnSync
   */
  sync: function sync(command, options) {
    var param = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Log.verbose("Spawning sync ".concat(Style.yellow("".concat(command, " ").concat(_toConsumableArray(options).join(' '))), " with ").concat(Style.yellow(JSON.stringify(param))));

    if (Spawning.isWin) {
      return Spawn.spawnSync('cmd.exe', ['/s', '/c', command].concat(_toConsumableArray(options)), param);
    } else {
      return Spawn.spawnSync(command, _toConsumableArray(options), param);
    }
  }
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exit handler
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Handle exiting of program
 *
 * @param {null}   exiting - null for bind
 * @param {object} error   - Object to distinguish between closing events
 */

module.exports.ExitHandler = function (exiting, error) {
  if (error && error !== 1) {
    try {
      //try using our pretty output
      Log.error(error);
    } catch (error) {
      //looks like it’s broken too so let’s just do the old school thing
      console.error(error);
    }
  }

  if (exiting.withoutSpace) {
    process.exit(0); //exit now
  }

  Log.space(); //adding some space

  process.exit(0); //now exit with a smile :)
};

module.exports.Spawning = Spawning;