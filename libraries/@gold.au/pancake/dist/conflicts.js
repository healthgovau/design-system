/***************************************************************************************************************************************************************
 *
 * Check an module object for conflicts
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// const Path = require( 'path' );
// const Fs = require( 'fs' );
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style;

var Semver = require('./semver-5-3-0'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Check modules for conflicts
 *
 * @param  {object} allModules - An object of all modules
 *
 * @return {object}            - An object that can be used to generate an error message
 */


module.exports.CheckModules = function (allModules) {
  var dependencies = new Map(); //a map we populate with the dependencies of our modules we found

  var modules = new Map(); //a map for all installed modules and their versions

  var result = {
    //the return object
    conflicts: false,
    //we always assume the best
    message: "",
    //a couple message to help understand the shemozzle
    module: '',
    //the conflict causing module
    dependencies: {} //other modules that depend on the conflicting module

  }; //add all packages into our maps

  var _iterator = _createForOfIteratorHelper(allModules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var modulePackage = _step.value;
      modules.set(modulePackage.name, modulePackage.version); //saving all modules with version for later comparison

      if (modulePackage.peerDependencies !== undefined) {
        dependencies.set(modulePackage.name, modulePackage.peerDependencies); //save the dependencies into the map for later comparison
      }
    } //iterate over all dependencies [dependencies] and check against what we have installed [modules]

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(dependencies),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _module = _step2$value[0],
          moduleDependencies = _step2$value[1];

      Log.verbose("Checking dependencies for ".concat(Style.yellow(_module), " which are: ").concat(Style.yellow(JSON.stringify(moduleDependencies))));

      for (var _i2 = 0, _Object$keys = Object.keys(moduleDependencies); _i2 < _Object$keys.length; _i2++) {
        var dependency = _Object$keys[_i2];
        var version = moduleDependencies[dependency]; //the version we require

        var existing = modules.get(dependency); //the version we have

        if (!Semver.satisfies(existing, version) || existing === undefined) {
          (function () {
            //version conflict or not installed at all?
            result.conflicts = true; //we found a conflict

            result.module = dependency; //with this module

            var requires = existing === undefined ? //building error message
            "the module ".concat(Style.bold(dependency), " but it\u2019s missing.") : "".concat(Style.bold(dependency), " version ").concat(Style.bold(version), ", however version ").concat(Style.bold(existing), " was installed.");
            result.message += "Found conflicting dependenc(ies)\n\n";
            result.message += "The module ".concat(Style.bold(_module), " requires ").concat(requires, "\n"); //let’s look who else depends on this conflicting module

            var otherModules = {};

            var _iterator3 = _createForOfIteratorHelper(dependencies),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    subModule = _step3$value[0],
                    subModuleDependencies = _step3$value[1];

                if (subModuleDependencies[dependency] !== undefined) {
                  if (otherModules[subModuleDependencies[dependency]] === undefined) {
                    otherModules[subModuleDependencies[dependency]] = [];
                  }

                  otherModules[subModuleDependencies[dependency]].push(subModule); //sort by version
                }
              } //sort versions

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var otherModulesOrdered = {};
            Object.keys(otherModules).sort().forEach(function (key) {
              otherModulesOrdered[key] = otherModules[key];
            });
            result.dependencies = otherModulesOrdered; //generate tree

            result.message += "\n\n".concat(Style.bold(dependency), " is required by the following modules:");

            for (var _i3 = 0, _Object$keys2 = Object.keys(otherModulesOrdered); _i3 < _Object$keys2.length; _i3++) {
              var key = _Object$keys2[_i3];
              result.message += Style.bold("\n\n. ".concat(key));

              for (var i = 0; i < otherModulesOrdered[key].length; i++) {
                result.message += "\n".concat(i + 1 == otherModulesOrdered[key].length ? '└' : '├', "\u2500\u2500 ").concat(otherModulesOrdered[key][i]);
              }

              ;
            }

            result.message += "\n\nTo fix this issue make sure all your modules require the same version."; //suggestion...

            if (Object.keys(otherModules).length == 1) {
              result.message += "/nMaybe upgrade the ".concat(Style.bold(dependency), " module.");
            }
          })();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  Log.verbose("Result of checking:\n".concat(Style.yellow(JSON.stringify(result))));
  return result;
};