#!/usr/bin/env node

/***************************************************************************************************************************************************************
 *
 * Checking peerDependencies for conflicts
 * This tool was built to make working with npm and the front end easy and seamless.
 *
 * @repo    - https://github.com/designsystemau/pancake
 * @author  - Dominik Wilkowski
 * @license - https://raw.githubusercontent.com/designsystemau/pancake/master/LICENSE (MIT)
 *
 **************************************************************************************************************************************************************/
'use strict'; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var Path = require('path'); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Using this file to export the reusable items
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./files'),
    GetFolders = _require.GetFolders,
    CreateDir = _require.CreateDir,
    WriteFile = _require.WriteFile,
    ReadFile = _require.ReadFile,
    CopyFile = _require.CopyFile;

var _require2 = require('./helpers'),
    ExitHandler = _require2.ExitHandler,
    CheckNPM = _require2.CheckNPM,
    Cwd = _require2.Cwd,
    Size = _require2.Size,
    Spawning = _require2.Spawning;

var _require3 = require('./logging'),
    Log = _require3.Log,
    Style = _require3.Style,
    Loading = _require3.Loading;

var _require4 = require('./parse-arguments'),
    ParseArgs = _require4.ParseArgs;

var _require5 = require('./conflicts'),
    CheckModules = _require5.CheckModules;

var _require6 = require('./modules'),
    GetModules = _require6.GetModules;

var _require7 = require('./settings'),
    Settings = _require7.Settings;

var Semver = require('./semver-5-3-0');

module.exports = {
  //here, take a sword; for you may need it
  ExitHandler: ExitHandler,
  CheckNPM: CheckNPM,
  Cwd: Cwd,
  Size: Size,
  Spawning: Spawning,
  Log: Log,
  Style: Style,
  Loading: Loading,
  ParseArgs: ParseArgs,
  CheckModules: CheckModules,
  GetModules: GetModules,
  Settings: Settings,
  GetFolders: GetFolders,
  CreateDir: CreateDir,
  WriteFile: WriteFile,
  ReadFile: ReadFile,
  CopyFile: CopyFile,
  Semver: Semver
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get batter object
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Running all the important bits to get us the data we need to run Pancake programmatically
 *
 * @param  {array} argv     - The arguments passed to node
 *
 * @return {Promise object} - The data object of the pancake modules
 */

module.exports.Batter = function () {
  var argv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.argv;

  var pkg = require(Path.normalize("".concat(__dirname, "/../package.json"))); // Check npm version


  var npmVersion = CheckNPM(); //npm 3 and higher is required as below will install dependencies inside each module folder

  if (!npmVersion) {
    Log.error("Pancake only works with npm 3 and later.");
    Log.space();
    process.exit(1);
  } // Get global settings


  var SETTINGS = Settings.GetGlobal(); // Parsing cli arguments

  var ARGS = ParseArgs(SETTINGS, argv); //arg overwrites

  SETTINGS.npmOrg = ARGS.org;
  SETTINGS.plugins = ARGS.plugins;
  SETTINGS.ignorePlugins = ARGS.ignorePlugins; // Finding the current working directory

  var pkgPath = Cwd(ARGS.cwd); // Get local settings

  var SETTINGSlocal = Settings.GetLocal(pkgPath); // Get all modules data

  return new Promise(function (resolve, reject) {
    GetModules(pkgPath, SETTINGS.npmOrg)["catch"](function (error) {
      reject("Reading all package.json files bumped into an error: ".concat(error));
      reject(error);
    }).then(function (allModules) {
      //once we got all the content from all package.json files
      Log.verbose("Gathered all modules:\n".concat(Style.yellow(JSON.stringify(allModules))));

      if (allModules.length > 0) {
        var conflicts = CheckModules(allModules); //check for conflicts

        if (conflicts.conflicts) {
          reject(conflicts);
        } else {
          resolve({
            version: pkg.version,
            modules: allModules,
            settings: SETTINGSlocal,
            globalSettings: SETTINGS,
            cwd: pkgPath
          });
        }
      } else {
        resolve({
          version: pkg.version,
          modules: allModules,
          settings: SETTINGSlocal,
          globalSettings: SETTINGS,
          cwd: pkgPath
        });
      }
    });
  });
};