/***************************************************************************************************************************************************************
 *
 * Generate and compile Sass
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

var Autoprefixer = require('autoprefixer');

var Postcss = require('postcss');

var Sass = require('node-sass');

var Path = require('path'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('@gold.au/pancake'),
    Log = _require.Log,
    Style = _require.Style,
    WriteFile = _require.WriteFile; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Get the include path for a sass partial
 *
 * @param  {string} module       - The module name
 * @param  {object} modules      - An object of all modules and their settings
 * @param  {string} baseLocation - The current base path
 * @param  {string} npmOrg       - The npm org scope
 *
 * @return {string}              - The path to the sass partial
 */


var GetPath = function GetPath(module, modules, baseLocation, npmOrg) {
  var modulePath = '';
  var npmOrgs = npmOrg.split(' ');
  var location;
  npmOrgs.forEach(function (org) {
    if (baseLocation.includes(org)) {
      location = baseLocation.replace("".concat(org).concat(Path.sep), '');
    }
  });

  var _iterator = _createForOfIteratorHelper(modules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item.name === module) {
        if (item.pancake['pancake-module'].sass.path) {
          modulePath = Path.normalize("".concat(location, "/").concat(module, "/").concat(item.pancake['pancake-module'].sass.path));
        } else {
          modulePath = false;
        }

        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return modulePath;
};
/**
 * Look up all dependencies of a module by calling yourself
 *
 * @param  {string}  module    - The name of the module
 * @param  {object}  modules   - All modules in an object array
 * @param  {string}  parent    - The name of the parent module, Defaults to the module argument
 * @param  {integer} iteration - The depth of the iteration, defaults to 1
 *
 * @return {object}            - An object array of the dependencies that are needed for the module
 */


var GetDependencies = function GetDependencies(module, modules) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : module;
  var iteration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  Log.verbose("Sass: Looking up dependencies at level ".concat(Style.yellow(iteration)));
  var allDependencies = {};

  if (iteration > 50) {
    Log.error("Sass: Looks like we found a circular dependency that seems to go no-where from ".concat(Style.yellow(parent), "."));
  } else {
    var _iterator2 = _createForOfIteratorHelper(modules),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (item.name === module) {
          if (item.peerDependencies) {
            for (var _i = 0, _Object$keys = Object.keys(item.peerDependencies); _i < _Object$keys.length; _i++) {
              var subDependency = _Object$keys[_i];
              var subDependencies = GetDependencies(subDependency, modules, parent, iteration + 1);
              allDependencies = Object.assign(allDependencies, subDependencies);
            }
          }

          allDependencies = Object.assign(allDependencies, item.peerDependencies);
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return allDependencies;
};
/**
 * Generate Sass code for a module and it’s dependencies
 *
 * @param  {string} location - The location of the module to be compiled
 * @param  {object} name     - The name of the module
 * @param  {object} modules  - All modules and their dependencies
 * @param  {object} npmOrg   - The name of the npm org scope
 *
 * @return {string}          - Sass code to tie dependencies and module together
 */


module.exports.GenerateSass = function (location, name, modules, npmOrg) {
  var sass = ""; //the code goes here

  var baseLocation = Path.normalize("".concat(location, "/../"));
  var dependencies = GetDependencies(name, modules);
  Log.verbose("Sass: For ".concat(Style.yellow(name), " we found the following dependencies ").concat(Style.yellow(JSON.stringify(dependencies))));

  if (dependencies) {
    for (var _i2 = 0, _Object$keys2 = Object.keys(dependencies); _i2 < _Object$keys2.length; _i2++) {
      var dependency = _Object$keys2[_i2];

      var _modulePath = GetPath(dependency, modules, baseLocation, npmOrg);

      if (_modulePath) {
        sass += "@import \"".concat(_modulePath, "\";\n");
      }
    }
  }

  var modulePath = GetPath(name, modules, baseLocation, npmOrg);
  sass += "@import \"".concat(modulePath, "\";\n");
  return sass.replace(/\\/g, "\\\\"); // escape path for silly windows
};
/**
 * Compile Sass, autoprefix it and save it to disk
 *
 * @param  {string} location - The path we want to save the compiled css to
 * @param  {object} settings - The SettingsCSS object
 * @param  {string} sass     - The Sass to be compiled
 *
 * @return {promise object}  - Boolean true for 👍 || string error for 👎
 */


module.exports.Sassify = function (location, settings, sass) {
  return new Promise(function (resolve, reject) {
    var compiled = Sass.render({
      data: sass,
      indentType: 'tab',
      //this is how real developers indent!
      outputStyle: settings.minified ? 'compressed' : 'expanded'
    }, function (error, generated) {
      if (error) {
        Log.error("Sass compile failed for ".concat(Style.yellow(location)));
        reject(error.message);
      } else {
        Log.verbose("Sass: Successfully compiled Sass for ".concat(Style.yellow(location)));
        Postcss([Autoprefixer({
          browsers: settings.browsers
        })]).process(generated.css)["catch"](function (error) {
          return reject(error);
        }).then(function (prefixed) {
          if (prefixed) {
            prefixed.warnings().forEach(function (warn) {
              return Log.error(warn.toString());
            });
            Log.verbose("Sass: Successfully autoprefixed CSS for ".concat(Style.yellow(location)));
            WriteFile(location, prefixed.css) //write the generated content to file and return its promise
            ["catch"](function (error) {
              Log.error(error);
              reject(error);
            }).then(function () {
              resolve(true);
            });
          }
        });
      }
    });
  });
};

module.exports.GetDependencies = GetDependencies;
module.exports.GetPath = GetPath;