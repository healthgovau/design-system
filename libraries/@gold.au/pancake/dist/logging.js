/***************************************************************************************************************************************************************
 *
 * Logging made pretty
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
// Ansi escape color codes
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Returning ansi escape color codes
 * Credit to: https://github.com/chalk/ansi-styles
 *
 * @type {Object}
 */

var Style = {
  /**
   * Parse ansi code while making sure we can nest colors
   *
   * @param  {string} text  - The text to be enclosed with an ansi escape string
   * @param  {string} start - The color start code, defaults to the standard color reset code 39m
   * @param  {string} end   - The color end code
   *
   * @return {string}       - The escaped text
   */
  parse: function parse(text, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "39m";

    if (text !== undefined) {
      var replace = new RegExp("\\u001b\\[".concat(end), 'g'); //find any resets so we can nest styles

      return "\x1B[".concat(start).concat(text.toString().replace(replace, "\x1B[".concat(start)), "\x1B[").concat(end);
    } else {
      return "";
    }
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  black: function black(text) {
    return Style.parse(text, "30m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  red: function red(text) {
    return Style.parse(text, "31m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  green: function green(text) {
    return Style.parse(text, "32m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  yellow: function yellow(text) {
    return Style.parse(text, "33m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  blue: function blue(text) {
    return Style.parse(text, "34m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  magenta: function magenta(text) {
    return Style.parse(text, "35m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  cyan: function cyan(text) {
    return Style.parse(text, "36m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  white: function white(text) {
    return Style.parse(text, "37m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  gray: function gray(text) {
    return Style.parse(text, "90m");
  },

  /**
   * Style a string with ansi escape codes
   *
   * @param  {string} text - The string to be wrapped
   *
   * @return {string}      - The string with opening and closing ansi escape color codes
   */
  bold: function bold(text) {
    return Style.parse(text, "1m", "22m");
  }
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Logging prettiness
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * A logging object
 *
 * @type {Object}
 */

var Log = {
  verboseMode: false,
  //verbose flag
  output: false,
  //have we outputted something yet?
  hasError: false,
  //let’s assume the best

  /**
   * Log an error
   *
   * @param  {string}  text - The text you want to log with the error
   */
  error: function error(text) {
    if (!Log.output) {
      //if we haven’t printed anything yet
      Log.space(); //only then we add an empty line on the top
    }

    Loading.stop(); //stop any animations first

    if (!Log.hasError) {
      var messages = [//because errors don’t have to be boring!
      "Uh oh", "Oh no", "Sorry", "D'oh", "Oh my", "Ouch", "Oops", "Nein", "Mhh", "Gosh", "Gee", "Goodness", "Fiddlesticks", "Dang", "Dear me", "Oh dear", "Phew", "Pardon", "Whoops", "Darn", "Jinx", "No luck", "Cursed", "Poppycock", "Humbug", "Hogwash", "Boloney", "Codswallop", "Nuts", "Foolery", "Lunacy", "Shenanigans", "Fudge", "Blimey", "Dagnabit", "Bugger", "Pillock", "Fudge", "Crickey"];
      var message = messages.sort(function () {
        return 0.5 - Math.random();
      })[0];
      console.log(Style.red("                         ".concat("/".repeat(message.length + 6))));
      console.log(Style.red("                        +".concat("-".repeat(message.length + 4), "+/")));
      console.log(Style.red("            (\u3063\u02D8\u0329\u256D\u256E\u02D8\u0329)\u3063  |  ") + Style.bold(Style.red(message)) + Style.red("  |/")); //we need something big to help npms error system

      console.log(Style.red("                        +".concat("-".repeat(message.length + 4), "+")) + "\n");
    }

    console.error("\uD83D\uDD25  ".concat(Style.red("ERROR:   ".concat(text))));
    Log.output = true; //now we have written something out

    Log.hasError = true;
  },

  /**
   * Log a message
   *
   * @param  {string}  text - The text you want to log
   */
  info: function info(text) {
    if (!Log.output) {
      Log.space();
    }

    Loading.pause();
    console.info("\uD83D\uDD14  INFO:    ".concat(text));
    Loading.resume();
    Log.output = true;
  },

  /**
   * Log success
   *
   * @param  {string}  text - The text you want to log
   */
  ok: function ok(text) {
    if (!Log.output) {
      Log.space();
    }

    Loading.pause();
    console.info("\uD83D\uDC4D  ".concat(Style.green("OK:"), "      ").concat(Style.green(text)));
    Loading.resume();
    Log.output = true;
  },

  /**
   * Log the final message
   *
   * @param  {string}  text - The text you want to log
   */
  done: function done(text) {
    if (!Log.output) {
      Log.space();
    }

    Loading.stop();
    console.info("\uD83D\uDE80           ".concat(Style.green(Style.bold(text))));
    Log.output = true;
  },

  /**
   * Log a verbose message
   *
   * @param  {string}  text    - The text you want to log
   * @param  {boolean} verbose - Verbose flag either undefined or true
   */
  verbose: function verbose(text) {
    if (Log.verboseMode) {
      if (!Log.output) {
        Log.space();
      }

      console.info("\uD83D\uDE2C  ".concat(Style.gray("VERBOSE: ".concat(text))));
      Log.output = true;
    }
  },

  /**
   * Add some space to the output
   */
  space: function space() {
    console.log("\n");
  }
}; //--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Ansi loading animation
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Loading animation
 *
 * @method  start - Start spinner
 * @method  stop  - Stop spinner
 *
 * @return {object} - Object with methods
 */

var Loading = function () {
  var sequence = [//the sequence of all animation frame
  //pancake loading animation
  Style.gray("            ( ^-^)".concat(Style.yellow("\u65E6"), "                 ")), Style.gray("             ( ^-^)".concat(Style.yellow("\u65E6"), "                ")), Style.gray("              ( ^-^)".concat(Style.yellow("\u65E6"), "               ")), Style.gray("               ( ^-^)".concat(Style.yellow("\u65E6"), "              ")), Style.gray("                ( ^-^)".concat(Style.yellow("\u65E6"), "             ")), Style.gray("                 ( ^-^)".concat(Style.yellow("\u65E6"), "            ")), Style.gray("                  ( ^-^)".concat(Style.yellow("\u65E6"), "           ")), Style.gray("                   ( ^-^)".concat(Style.yellow("\u65E6"), "          ")), Style.gray("                    ( ^-^)".concat(Style.yellow("\u65E6"), "         ")), Style.gray("                     ( ^-^)".concat(Style.yellow("\u65E6"), "        ")), Style.gray("                      ( ^-^)".concat(Style.yellow("\u65E6"), "       ")), Style.gray("                       ( ^-^)".concat(Style.yellow("\u65E6"), "      ")), Style.gray("                        ( ^-^)".concat(Style.yellow("\u65E6"), "     ")), Style.gray("                         ( ^-^)".concat(Style.yellow("\u65E6"), "    ")), Style.gray("                          ( ^-^)".concat(Style.yellow("\u65E6"), "   ")), Style.gray("                           ( ^-^)".concat(Style.yellow("\u65E6"), "  ")), Style.gray("                            ( ^-^)".concat(Style.yellow("\u65E6"), " ")), Style.gray("                            ( ^-^)".concat(Style.yellow("\u65E6"), " ")), Style.gray("                             ( ^-^)".concat(Style.yellow("\u65E6"))), Style.gray("                            ".concat(Style.yellow("\u65E6"), "(^-^ ) ")), Style.gray("                           ".concat(Style.yellow("\u65E6"), "(^-^ )  ")), Style.gray("                          ".concat(Style.yellow("\u65E6"), "(^-^ )   ")), Style.gray("                         ".concat(Style.yellow("\u65E6"), "(^-^ )    ")), Style.gray("                        ".concat(Style.yellow("\u65E6"), "(^-^ )     ")), Style.gray("                       ".concat(Style.yellow("\u65E6"), "(^-^ )      ")), Style.gray("                      ".concat(Style.yellow("\u65E6"), "(^-^ )       ")), Style.gray("                     ".concat(Style.yellow("\u65E6"), "(^-^ )        ")), Style.gray("                    ".concat(Style.yellow("\u65E6"), "(^-^ )         ")), Style.gray("                   ".concat(Style.yellow("\u65E6"), "(^-^ )          ")), Style.gray("                  ".concat(Style.yellow("\u65E6"), "(^-^ )           ")), Style.gray("                 ".concat(Style.yellow("\u65E6"), "(^-^ )            ")), Style.gray("                ".concat(Style.yellow("\u65E6"), "(^-^ )             ")), Style.gray("               ".concat(Style.yellow("\u65E6"), "(^-^ )              ")), Style.gray("              ".concat(Style.yellow("\u65E6"), "(^-^ )               ")), Style.gray("             ".concat(Style.yellow("\u65E6"), "(^-^ )                ")), Style.gray("            ".concat(Style.yellow("\u65E6"), "(^-^ )                 ")) //old style loading animation
  // Style.gray(`            ${ Style.yellow('*') } • • • •`),
  // Style.gray(`            • ${ Style.yellow('*') } • • •`),
  // Style.gray(`            • • ${ Style.yellow('*') } • •`),
  // Style.gray(`            • • • ${ Style.yellow('*') } •`),
  // Style.gray(`            • • • • ${ Style.yellow('*') }`),
  // Style.gray(`            • • • ${ Style.yellow('*') } •`),
  // Style.gray(`            • • ${ Style.yellow('*') } • •`),
  // Style.gray(`            • ${ Style.yellow('*') } • • •`),
  // Style.gray(`            ${ Style.yellow('*') } • • • •`),
  ];
  var index = 0; //the current index of the animation

  var timer = {}; //the setInterval object

  var speed = 80; //the speed in which to animate

  return {
    running: {},
    start: function start() {
      var plugin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pancake';
      var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Log.verboseMode;

      if (!verbose) {
        clearInterval(timer); //stop any possible parallel loaders

        Loading.running[plugin] = true;
        process.stdout.write("".concat(sequence[index])); //print the first frame

        timer = setInterval(function () {
          //animate
          process.stdout.write('\r\x1b[K'); //move cursor to beginning of line and clean line

          index = index < sequence.length - 1 ? index + 1 : 0;
          process.stdout.write(sequence[index]); //print
        }, speed);
      }
    },
    stop: function stop() {
      var plugin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pancake';
      var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Log.verboseMode;

      if (!verbose) {
        delete Loading.running[plugin];

        if (Object.keys(Loading.running).length === 0) {
          clearInterval(timer); //stop interval

          process.stdout.write('\r\r\x1b[K'); //clear screen
        }
      }
    },
    pause: function pause() {
      var verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Log.verboseMode;

      if (!verbose) {
        clearInterval(timer); //stop interval

        process.stdout.write('\r\r\x1b[K'); //clear screen
      }
    },
    resume: function resume() {
      var verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Log.verboseMode;

      if (!verbose) {
        if (Object.keys(Loading.running).length > 0) {
          clearInterval(timer); //stop any possible parallel loaders

          timer = setInterval(function () {
            //animate
            process.stdout.write('\r\x1b[K'); //move cursor to beginning of line and clean line

            index = index < sequence.length - 1 ? index + 1 : 0;
            process.stdout.write(sequence[index]); //print
          }, speed);
        }
      }
    }
  };
}();

module.exports.Style = Style;
module.exports.Loading = Loading;
module.exports.Log = Log;