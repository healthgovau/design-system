/***************************************************************************************************************************************************************
 *
 * Running pancake inside a cli
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

var Path = require('path'); // const Fs = require( 'fs' );
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Module imports
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


var _require = require('./helpers'),
    ExitHandler = _require.ExitHandler,
    CheckNPM = _require.CheckNPM,
    Cwd = _require.Cwd,
    Size = _require.Size;

var _require2 = require('./plugins'),
    InstallPlugins = _require2.InstallPlugins,
    RunPlugins = _require2.RunPlugins;

var _require3 = require('./modules'),
    GetModules = _require3.GetModules,
    GetPlugins = _require3.GetPlugins;

var _require4 = require('./logging'),
    Log = _require4.Log,
    Style = _require4.Style,
    Loading = _require4.Loading;

var _require5 = require('./parse-arguments'),
    ParseArgs = _require5.ParseArgs;

var _require6 = require('./conflicts'),
    CheckModules = _require6.CheckModules;

var _require7 = require('./settings'),
    Settings = _require7.Settings; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Running the program in CLI
 *
 * @param  {array} argv - The arguments passed to node
 */


module.exports.init = function () {
  var argv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.argv;

  var pkg = require(Path.normalize("".concat(__dirname, "/../package.json"))); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Verbose flag
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  var verbose = false;

  if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--verbose') !== -1) {
    Log.verboseMode = true;
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Check npm version
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  var npmVersion = CheckNPM(); //npm 3 and higher is required as below will install dependencies inside each module folder

  if (!npmVersion) {
    Log.error("Pancake only works with npm 3 and later.");
    Log.space();
    process.exit(1);
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Get global settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  var SETTINGS = Settings.GetGlobal(); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Parsing cli arguments
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  var ARGS = ParseArgs(SETTINGS, argv); //arg overwrites

  SETTINGS.npmOrg = ARGS.org;
  SETTINGS.plugins = ARGS.plugins;
  SETTINGS.ignorePlugins = ARGS.ignorePlugins.length ? ARGS.ignorePlugins : SETTINGS.ignorePlugins; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Set global settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  if (ARGS.set.length > 0) {
    SETTINGS = Settings.SetGlobal.apply(Settings, [__dirname, SETTINGS].concat(_toConsumableArray(ARGS.set)));
    Loading.stop();
    Log.space();
    process.exit(0); //finish after
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Display help
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  if (ARGS.help) {
    Log.info("Pancake help");
    Loading.stop();

    if (Size().width > 110) {
      //only show if we have enough space
      console.log(Style.yellow("\n                                                 ".concat(Style.white(".,;+@@@@@@@@@#+;,\n                                              #+':               .+@@;\n                                            @`                       `##\n                                           @+   `;@@#+'      ,+@@@@@@@@@@"), "\n                                 `,;''+#@@++").concat(Style.white("@     .,;@;    @@@@@@@@@@@@@ #@@@@"), "+:`\n                          `,'@@+,`   :;:;+'").concat(Style.white("`:@@;.       `@@@@@@@@@@@+..@@@@@@@@@@@"), "#;`\n                       +@#,        ``.,.  ").concat(Style.white("@@.+ @@@':. `;@#  ;.,+@@@@@@@@@@@@@@@@@@@@@@@@@@@"), "'\n                   ,#@,     `.`        ").concat(Style.white("#@.#@@@@@@#@@@ `: ;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@"), "   ;@'\n               .@@@;:,`  .;++;,      ").concat(Style.white("#@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"), "        `   `@:\n             @@,   ,;::;;,.        ").concat(Style.white("@@@@@@@@@@@@#':'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"), "    `  `,`  `  .#+`\n           '@.   ..   ,'+':`      ").concat(Style.white("@@@@@@@@'`        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"), "'      .,  .`     ,@'\n        ,@+       '.               ").concat(Style.white("@@@@,           ,@@@@@@:    .#@@@@@@@@@@@@@@@@@@@@@+"), "                  ;@\n      ;@,                                           ").concat(Style.white("#@+`          .@@@@@+     .+@@@#+@"), ";                    @\n      @+      .@'++                                                 ").concat(Style.white(":@@@"), "                                  @#\n         +#@,          :;:':':                     - pancake -        ").concat(Style.white("@@@"), "                         `:'':  `@'\n       '@@@@@@@@@@,                                                    ").concat(Style.white("@@"), ":      '`  ,'+##@@@@@@@@@.    ``\n   `@@`   `::,';:;#@@@@@@#;.  `,;++',                               .' ").concat(Style.white("@@@"), "  ,@@@,@@@@@@@#+':,`             ,+#\n  :@`                    .#@@@@@@+#@@@@@@@@@@@@@@#+''+++@@@@@@@+#+++   ").concat(Style.white("@@@@"), ";,,;,`                             @\n  `@:                                   `:;+#@@##@@@+;,`              ").concat(Style.white("#@';@@"), "                                 #,\n    ;#+;            ```                                               ").concat(Style.white("@@+@@#"), "                             .+'.\n         '@@@@@@@@@@@@@@@@#.                             ``           ").concat(Style.white("#@@@#"), "     ``         `#@@@@@@:'@@@@@@,\n                   ``...,,+@@@@@@@@'.`.,;''#@@@;    `'@@@@@@@@@@@@@@#:     @@@#'` `###@@#'.        ,;;,::\n                                     ,@@@@@@@@#@@@:@@@@#;.")));
    }

    console.log(Style.yellow("\n  ( ^-^)_\u65E6\n\n") + "  \uD83E\uDD5E  Pancake is an utility to make working with npm modules for the frontend sweet and seamlessly.\n\n" + "  It will check your peerDependencies for conflicts and comes with plugins to compile the contents\n" + "  for you and lists all available modules for you to select and install.\n\n" + "  ".concat(Style.gray("".concat(String.repeat("-", Size().width > 114 ? 110 : Size().width - 4), "\n\n"))) + "  ".concat(Style.bold("PATH"), "            - Run pancake in a specific path and look for pancake modules there.\n") + "    $ ".concat(Style.yellow("pancake /Users/you/project/folder"), "\n\n") + "  ".concat(Style.bold("SETTINGS"), "        - Set global settings. Available settings are: ").concat(Style.yellow(Object.keys(SETTINGS).join(', ')), ".\n") + "    $ ".concat(Style.yellow("pancake --set npmOrg \"@yourOrg @anotherOrg\""), "\n") + "    $ ".concat(Style.yellow("pancake --set ignorePlugins @gold.au/pancake-sass,@gold.au/pancake-svg"), "\n\n") + "  ".concat(Style.bold("ORG"), "             - Change the org scope of the pancake modules you like to use.\n") + "    $ ".concat(Style.yellow("pancake --org \"@your.org\""), "\n\n") + "  ".concat(Style.bold("PLUGINS"), "         - Temporarily turn off all plugins.\n") + "    $ ".concat(Style.yellow("pancake --noplugins"), "\n\n") + "  ".concat(Style.bold("IGNORED PLUGINS"), " - Prevent a certain plugin(s) from being installed and run.\n") + "    $ ".concat(Style.yellow("pancake --ignore @gold.au/pancake-js,@gold.au/pancake-sass"), "\n\n") + "  ".concat(Style.bold("DON\u2019T SAVE"), "      - Prevent pancake to save it\u2019s settings into your package.json.\n") + "    $ ".concat(Style.yellow("pancake --nosave"), "\n\n") + "  ".concat(Style.bold("HELP"), "            - Display the help (this screen).\n") + "    $ ".concat(Style.yellow("pancake --help"), "\n\n") + "  ".concat(Style.bold("VERSION"), "         - Display the version of pancake.\n") + "    $ ".concat(Style.yellow("pancake --version"), "\n\n") + "  ".concat(Style.bold("VERBOSE"), "         - Run pancake in verbose silly mode\n") + "    $ ".concat(Style.yellow("pancake --verbose")));
    Log.space();
    process.exit(0); //finish after
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Finding the current working directory
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  var pkgPath = Cwd(ARGS.cwd); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Get local settings
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  var SETTINGSlocal = Settings.GetLocal(pkgPath); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Display version
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  if (ARGS.version) {
    console.log("v".concat(pkg.version));

    if (ARGS.verbose) {
      //show some space if we had verbose enabled
      Log.space();
    }

    process.exit(0); //finish after
  } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Show banner
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------


  Log.info("PANCAKE MIXING THE BATTER"); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Get all modules data
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  Loading.start();
  GetModules(pkgPath, SETTINGS.npmOrg)["catch"](function (error) {
    Log.error("Reading all package.json files bumped into an error: ".concat(error));
    Log.error(error);
    process.exit(1);
  }).then(function (allModules) {
    //once we got all the content from all package.json files
    Log.verbose("Gathered all modules:\n".concat(Style.yellow(JSON.stringify(allModules)))); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Check for conflicts
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (allModules.length < 1) {
      Log.info("No modules found \uD83D\uDE2C");
      Loading.stop();
    } else {
      var conflicts = CheckModules(allModules);

      if (conflicts.conflicts) {
        Log.error(Style.red(conflicts.message));
        process.exit(1); //error out so npm knows things went wrong
      } else {
        Log.ok("All modules(".concat(allModules.length, ") without conflict \uD83D\uDCA5"));
      } //--------------------------------------------------------------------------------------------------------------------------------------------------------------
      // Install all plugins
      //--------------------------------------------------------------------------------------------------------------------------------------------------------------


      var plugins = []; //gather all plugins we have to run later

      var installed = []; //an array to be filled with a promise from InstallPlugins

      if (SETTINGSlocal.plugins === false || SETTINGS.plugins === false) {
        Loading.stop();
        Log.verbose("Skipping plugins");
      } else {
        var allPlugins = GetPlugins(allModules);
        allPlugins.map(function (plugin) {
          //filtering out ignored plugins
          if (SETTINGSlocal.ignore.filter(function (ignore) {
            return ignore === plugin;
          }).length === 0 && SETTINGS.ignorePlugins.filter(function (ignore) {
            return ignore === plugin;
          }).length === 0) {
            plugins.push(plugin);
          }
        });
        installed.push(InstallPlugins(plugins, pkgPath)); //add the promise to the installed array
      }

      Promise.all(installed) //if we had plugins installed, wait until they are finished
      ["catch"](function (error) {
        Log.error(error);
        process.exit(1);
      }).then(function (data) {
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------
        // Run all plugins
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------
        RunPlugins(pkg.version, plugins, pkgPath, allModules, SETTINGSlocal, SETTINGS)["catch"](function (error) {
          Loading.stop();
          Log.error(error);
        }).then(function (settings) {
          Loading.start(); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
          // Save local settings into host package.json
          //--------------------------------------------------------------------------------------------------------------------------------------------------------------

          if (SETTINGSlocal['auto-save'] && !ARGS.nosave) {
            //merge all plugin settings
            settings.map(function (setting) {
              Object.keys(setting).map(function (key) {
                SETTINGSlocal[key] = Object.assign(setting[key], SETTINGSlocal[key]);
              });
            });
            Settings.SetLocal(SETTINGSlocal, pkgPath) //let’s save all settings
            ["catch"](function (error) {
              Log.error("Saving settings caused an error: ".concat(error));
              process.exit(1);
            }).then(function (SETTINGSlocal) {
              Log.ok("SETTINGS SAVED"); //all done!

              Log.done("YOUR PANCAKE IS READY ( \u02D8\u25BD\u02D8)\u3063\u65E6"); //all done!
            });
          } else {
            Log.done("YOUR PANCAKE IS READY ( \u02D8\u25BD\u02D8)\u3063\u65E6"); //all done!
          }
        });
      });
    }
  }); //--------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Adding some event handling to exit signals
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------

  process.on('exit', ExitHandler.bind(null, {
    withoutSpace: false
  })); //on closing

  process.on('SIGINT', ExitHandler.bind(null, {
    withoutSpace: false
  })); //on [ctrl] + [c]

  process.on('uncaughtException', ExitHandler.bind(null, {
    withoutSpace: false
  })); //on uncaught exceptions
};