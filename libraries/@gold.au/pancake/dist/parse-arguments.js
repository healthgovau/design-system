/***************************************************************************************************************************************************************
 *
 * Parse the arguments of the cli
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('./logging'),
    Log = _require.Log,
    Style = _require.Style; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Default export
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Parsing arguments coming form the cli
 *
 * @param  {object} SETTINGS - The global settings object
 * @param  {array}  args     - The arguments passed to the program, defaults to process.argv
 *
 * @return {object}          - The defaults merged with the parsed arguments
 */


module.exports.ParseArgs = function (SETTINGS) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.argv;
  Log.verbose("Cli arguments: ".concat(Style.yellow(args.slice(2).join(', '))));
  var allowed = {
    //all allowed commands
    '--version': {
      //the long version of the argument
      name: 'version',
      //the name of the argument to map to it’s defaults
      "short": '-V',
      //the shortcut of this argument
      options: 0 //how many options may be passed to it

    },
    '--verbose': {
      name: 'verbose',
      "short": '-v',
      options: 0
    },
    '--nosave': {
      name: 'nosave',
      "short": '-n',
      options: 0
    },
    '--set': {
      name: 'set',
      "short": '-s',
      options: 2
    },
    '--org': {
      name: 'org',
      "short": '-o',
      options: 1
    },
    '--json': {
      name: 'json',
      "short": '-j',
      options: 1
    },
    '--noplugins': {
      name: 'plugins',
      "short": '-p',
      options: 0
    },
    '--ignore': {
      name: 'ignorePlugins',
      "short": '-i',
      options: 1
    },
    '--help': {
      name: 'help',
      "short": '-h',
      options: 0
    }
  };
  var defaults = {
    //we need to return these
    cwd: undefined,
    version: false,
    verbose: false,
    nosave: false,
    set: [],
    org: SETTINGS.npmOrg,
    json: SETTINGS.json,
    plugins: true,
    ignorePlugins: [],
    help: false
  };
  var index = 2; //the first two arguments are always the path to node and the path to this app

  if (args.length > 2) {
    //if there are even any arguments passed
    //optional argument in first place for cwd overwrite
    if (!args[2].startsWith("-")) {
      defaults.cwd = args[2];
      index = 3; //move right along
    } //now parse each argument


    for (index; index < args.length; index++) {
      var arg = args[index]; //maybe we are using the shortcut?

      if (allowed[arg] === undefined) {
        for (var _i = 0, _Object$keys = Object.keys(allowed); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (allowed[key]["short"] === arg) {
            arg = key; //use long version from here on out

            break;
          }
        }

        ;
      } //have we found this argument now?


      if (allowed[arg] === undefined) {
        Log.error("There is no such option as ".concat(Style.yellow(arg)));
        Log.error("The available options are:\n            ".concat(Style.yellow(Object.keys(allowed).join(", "))));
      } else {
        //argument found
        var command = allowed[arg];

        if (command.options > 0) {
          //flag with options
          for (var i = 0; i < command.options; i++) {
            //iterating over the options by moving along in the process.argv array
            index++;

            if (args[index] === undefined) {
              Log.error("There are some missings options in the commande ".concat(Style.yellow(arg)));
            } else {
              if (_typeof(defaults[command.name]) === 'object') {
                //the defaults make this as an object/array
                if (args[index].includes(',')) {
                  var _defaults$command$nam;

                  //the passing argument includes a comma so we split it
                  (_defaults$command$nam = defaults[command.name]).push.apply(_defaults$command$nam, _toConsumableArray(args[index].split(','))); //adding to defaults

                } else {
                  defaults[command.name].push(args[index]); //adding to defaults
                }
              }

              if (typeof defaults[command.name] === 'string') {
                //the defaults mark this as a string
                defaults[command.name] = args[index]; //set in defaults
              }
            }
          }
        } else {
          //boolean flag without options
          defaults[command.name] = !defaults[command.name]; //invert the default
        }
      }
    }
  }

  Log.verbose("Parsed arguments:\n".concat(Style.yellow(JSON.stringify(defaults))));
  return defaults;
};