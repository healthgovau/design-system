/***************************************************************************************************************************************************************
 *
 * Read all pancake packages
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
    GetFolders = _require2.GetFolders; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Reading and parsing a package.json file of a module
 *
 * @param  {string}  pkgPath - The path to the folder the package.json is in (omitting package.json)
 *
 * @return {promise object}  - Returns a promise and some of the data of the package.json
 */


var ReadModule = function ReadModule(pkgPath) {
  var thisPath = Path.normalize("".concat(pkgPath, "/package.json"));
  Log.verbose("Reading ".concat(Style.yellow(thisPath)));
  return new Promise(function (resolve, reject) {
    Fs.readFile(thisPath, "utf8", function (error, data) {
      if (error) {
        Log.verbose("No package.json found in ".concat(Style.yellow(thisPath))); //folders like .bin and .staging won’t have package.json inside

        resolve(null);
      } else {
        var packageJson = JSON.parse(data); //parse the package.json

        if (_typeof(packageJson.pancake) === 'object') {
          //is this a pancake module?
          Log.verbose("".concat(Style.green('✔'), " Identified ").concat(Style.yellow(packageJson.name), " as pancake module")); //we only want a subset

          var miniPackage = {
            name: packageJson.name,
            version: packageJson.version,
            peerDependencies: packageJson.peerDependencies,
            pancake: packageJson.pancake,
            path: pkgPath
          };
          resolve(miniPackage);
        } else {
          resolve(null); //non-pancake packages get null so we can identify them later and filter them out
        }
      }
    });
  });
};
/**
 * Get an object of all pancake modules inside a specified folder
 *
 * @param  {string}  pkgPath - The path that includes your node_module folder
 * @param  {string}  npmOrgs - The npmOrg scope
 *
 * @return {promise object}  - A promise.all that resolves when all package.jsons have been read
 */


module.exports.GetModules = function (pkgPath) {
  var _concat;

  var npmOrgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof pkgPath !== 'string' || pkgPath.length <= 0) {
    Log.error("GetPackages only takes a valid path. You passed [type: ".concat(Style.yellow(_typeof(pkgPath)), "] \"").concat(Style.yellow(pkgPath), "\""));
  } // Split the string of orgs into an array and map each value


  var npmOrgModules = npmOrgs.split(' ').map(function (npmOrg) {
    var modulesPath = Path.normalize("".concat(pkgPath, "/node_modules/").concat(npmOrg, "/")); //we add our npm org scope to the path to make this more effective

    Log.verbose("Looking for pancake modules in: ".concat(Style.yellow(pkgPath)));
    var modules = GetFolders(modulesPath); //all folders inside the selected path

    var altModulesPath = Path.normalize("".concat(pkgPath, "/../node_modules/").concat(npmOrg, "/"));

    if (Fs.existsSync(altModulesPath)) {
      Log.verbose("Also looking for pancake modules in: ".concat(Style.yellow(altModulesPath)));
      modules = modules.concat(GetFolders(altModulesPath)); //all folders inside the selected path
    }

    return modules;
  });

  var allModules = (_concat = [].concat).apply.apply(_concat, _toConsumableArray(npmOrgModules));

  if (allModules !== undefined && allModules.length > 0) {
    Log.verbose("Found the following module folders:\n".concat(Style.yellow(allModules.join('\n'))));
    var allPackages = allModules.map(function (pkg) {
      return ReadModule(pkg)["catch"](function (error) {
        Log.error(error);
        process.exit(1);
      });
    }); //read all packages and save the promise return

    return Promise.all(allPackages).then(function (packages) {
      //chaining the promise
      return packages.filter(function (p) {
        return p !== null;
      }); //making sure packages not identified as a pancake module don’t leave a trace in the returned array
    });
  } else {
    return Promise.resolve([]); //no pancake modules found at all
  }
};
/**
 * Generate an object from the allModules object to filter out all plugins requested by all modules
 *
 * @param  {object} allModules - The object off all modules from GetModules()
 *
 * @return {array}             - An array of all plugins
 */


module.exports.GetPlugins = function (allModules) {
  var plugins = {};
  allModules.map(function (module) {
    if (module.pancake === undefined) {
      //so we can pass the error message on to next block
      module.pancake = {};
    }

    if (module.pancake['pancake-module'] === undefined) {
      Log.error("The data passed to GetPlugins is missing the \"".concat(Style.yellow("pancake-module"), "\" object."));
      return false;
    }

    module.pancake['pancake-module'].plugins.map(function (plugin) {
      plugins[plugin] = 'yay!'; //we make them objects to filter out duplicates :)
    });
  });
  Log.verbose("Found the following plugins ".concat(Style.yellow(JSON.stringify(Object.keys(plugins)))));
  return Object.keys(plugins);
};

module.exports.ReadModule = ReadModule;