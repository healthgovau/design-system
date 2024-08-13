/***************************************************************************************************************************************************************
 *
 * Handle files, read, write, check
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var Path = require('path');

var Fs = require('fs'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Included modules
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get all folders inside a folder
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Get all folders within a given path
 *
 * @param  {string}  thisPath - The path that contains the desired folders
 *
 * @return {array}            - An array of paths to each folder
 */


module.exports.GetFolders = function (thisPath) {
  Log.verbose("Looking for folders in ".concat(Style.yellow(thisPath)));

  try {
    return Fs.readdirSync(Path.normalize(thisPath)) //read the folders content
    .filter(function (thisFile) {
      return Fs.statSync(Path.normalize("".concat(thisPath, "/").concat(thisFile))).isDirectory();
    } //only return directories
    ).map(function (path) {
      return Path.normalize("".concat(thisPath, "/").concat(path));
    }); //return with path
  } catch (error) {
    Log.verbose("".concat(Style.yellow(thisPath), " not found")); // Log.error( error );

    return [];
  }
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Create all folders in a path
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Create a path if it doesn’t exist
 *
 * @param  {string}  dir      - The path to be checked and created if not found
 *
 * @return {string}           - The path that was just worked at
 */


var CreateDir = function CreateDir(dir) {
  Log.verbose("Creating path ".concat(Style.yellow(dir)));
  var splitPath = dir.split(Path.sep);
  splitPath.reduce(function (path, subPath) {
    var currentPath;

    if (/^win/.test(process.platform) && path === '') {
      // when using windows (post truth) at beginning of the path
      path = './'; // we add the prefix to make sure it works on windows (yuck)
    }

    if (subPath != '.') {
      currentPath = Path.normalize("".concat(path, "/").concat(subPath));
      Log.verbose("Checking if ".concat(Style.yellow(currentPath), " exists"));

      if (!Fs.existsSync(currentPath)) {
        try {
          Fs.mkdirSync(currentPath);
          Log.verbose("Successfully ".concat(Style.yellow(currentPath), " created"));
        } catch (error) {
          Log.error("Pancake was unable to create the folder ".concat(Style.yellow(currentPath), " for path ").concat(Style.yellow(dir)));
          Log.error(error);
          process.exit(1);
        }
      }
    } else {
      currentPath = subPath;
    }

    return currentPath;
  }, '');
  return splitPath.join(Path.sep);
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Write file
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Promisified writing a file
 *
 * @param  {string} location - The location the file should be written to
 * @param  {string} content  - The content of the file
 *
 * @return {promise object}  - Boolean true for 👍 || string error for 👎
 */


var WriteFile = function WriteFile(location, content) {
  CreateDir(Path.dirname(location));
  return new Promise(function (resolve, reject) {
    Fs.writeFile(location, content, "utf8", function (error) {
      if (error) {
        Log.error("Writing file failed for ".concat(Style.yellow(location)));
        Log.error(JSON.stringify(error));
        reject(error);
      } else {
        Log.verbose("Successfully written ".concat(Style.yellow(location)));
        resolve(true);
      }
    });
  });
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Read file
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Promisified reading a file
 *
 * @param  {string} location - The location of the file to be read
 *
 * @return {promise object}  - The content of the file
 */


module.exports.ReadFile = function (location) {
  return new Promise(function (resolve, reject) {
    Fs.readFile(location, "utf8", function (error, content) {
      if (error) {
        Log.error("Reading file failed for ".concat(Style.yellow(location)));
        Log.error(JSON.stringify(error));
        reject(error);
      } else {
        Log.verbose("Successfully read ".concat(Style.yellow(location)));
        resolve(content);
      }
    });
  });
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Copy file
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Copy a file to another location
 *
 * @param  {string} fromFile - The path to the source file
 * @param  {string} toFile   - The path to the destination
 *
 * @return {promise object}  - The content of the file
 */


module.exports.CopyFile = function (fromFile, toFile) {
  CreateDir(Path.dirname(location));
  return new Promise(function (resolve, reject) {
    var writeStream = Fs.createWriteStream(toFile).on('error', handleError).on('finish', function () {
      Log.verbose("Successfully copied ".concat(Style.yellow(toFile)));
      resolve();
    });
    var readStream = Fs.createReadStream(fromFile).on('error', handleError).pipe(writeStream);

    function handleError(error) {
      Log.error("Copying file failed for ".concat(Style.yellow(location)));
      Log.error(JSON.stringify(error));
      readStream.destroy();
      writeStream.end();
      reject(error);
    }
  });
};

module.exports.CreateDir = CreateDir;
module.exports.WriteFile = WriteFile;