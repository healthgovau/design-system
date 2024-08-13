/***************************************************************************************************************************************************************
 *
 * Generate and compile JS
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var UglifyJS = require('uglify-js');

var Path = require('path'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('@gold.au/pancake'),
    Log = _require.Log,
    Style = _require.Style,
    ReadFile = _require.ReadFile,
    WriteFile = _require.WriteFile; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Minify JS so we have one function not several
 *
 * @param  {string} js   - The JS code to be minified
 * @param  {string} file - The file name for error reporting
 *
 * @return {string}      - The minified js code
 */


var MinifyJS = function MinifyJS(js, file) {
  try {
    var jsCode = UglifyJS.minify(js, {
      ie8: true
    });

    if (jsCode.error) {
      Log.error("Unable to uglify js code for ".concat(Style.yellow(file)));
      Log.error(jsCode.error);
      return js;
    } else {
      return jsCode.code;
    }
  } catch (error) {
    Log.error("Unable to uglify js code for ".concat(Style.yellow(file)));
    Log.error(error.message);
    return js;
  }
};
/**
 * Get js from module, minify depending on settings and write to disk
 *
 * @param  {string} from     - Where is the module so we can read from there
 * @param  {object} settings - The SettingsJS object
 * @param  {string} to       - Where shall we write the module to if settings allow?
 * @param  {string} tag      - The tag to be added to the top of the file
 *
 * @return {promise object}  - The js code either minified or bare bone
 */


module.exports.HandleJS = function (from, settings, to, tag) {
  return new Promise(function (resolve, reject) {
    ReadFile(from) //read the module
    ["catch"](function (error) {
      Log.error("Unable to read file ".concat(Style.yellow(from)));
      Log.error(error);
      reject(error);
    }).then(function (content) {
      var code = '';

      if (settings.minified) {
        //minification = uglify code
        code = MinifyJS(content, from);
        Log.verbose("JS: Successfully uglified JS for ".concat(Style.yellow(from)));
      } else {
        //no minification = just copy and rename
        code = "\n\n".concat(content);
      }

      code = "/*! ".concat(tag, " */").concat(code);

      if (settings.modules) {
        //are we saving modules?
        WriteFile(to, code) //write the generated content to file and return its promise
        ["catch"](function (error) {
          Log.error(error);
          reject(error);
        }).then(function () {
          resolve(code);
        });
      } else {
        resolve(code); //just return the promise
      }
    });
  });
};
/**
 * Minify all js modules together once their promises have resolved
 *
 * @param  {array}  version  - The version of mother pancake
 * @param  {array}  allJS    - An array of promise object for all js modules which will return their code
 * @param  {object} settings - The SettingsJS object
 * @param  {string} pkgPath  - The path to the current working directory
 *
 * @return {promise object}  - Returns true once the promise is resolved
 */


module.exports.MinifyAllJS = function (version, allJS, settings, pkgPath) {
  return new Promise(function (resolve, reject) {
    Promise.all(allJS)["catch"](function (error) {
      Log.error("JS: Compiling JS ran into an error: ".concat(error));
    }).then(function (js) {
      var Package = require(Path.normalize("".concat(__dirname, "/../package.json")));

      var locationJS = Path.normalize("".concat(pkgPath, "/").concat(settings.location, "/").concat(settings.name));
      var code = '';

      if (settings.minified) {
        code = MinifyJS(js.join("\n\n"), locationJS);
        Log.verbose("JS: Successfully uglified JS for ".concat(Style.yellow(locationJS)));
      } else {
        code = '\n\n' + js.join("\n\n");
      }

      code = "/* PANCAKE v".concat(version, " PANCAKE-JS v").concat(Package.version, " */").concat(code, "\n");
      WriteFile(locationJS, code) //write file
      ["catch"](function (error) {
        Log.error(error);
        reject(error);
      }).then(function () {
        resolve(true);
      });
    });
  });
};

module.exports.MinifyJS = MinifyJS;