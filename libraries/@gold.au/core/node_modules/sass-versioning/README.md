[![Build Status](https://travis-ci.org/dominikwilkowski/sass-versioning.svg?branch=master)](https://travis-ci.org/dominikwilkowski/sass-versioning)

Sass-versioning
===============

[![NPM](https://nodei.co/npm/sass-versioning.png?downloads=false)](https://nodei.co/npm/sass-versioning/)

> Version your sass modules and test them at compile time. Inspired by Salesforces [Sass deprecate](https://github.com/salesforce-ux/sass-deprecate) this
> package enables you to combine individually versioned sass partials with interdependencies and check for conflicts before you generate the CSS.

![Sass error examples](https://raw.githubusercontent.com/dominikwilkowski/sass-versioning/master/assets/errors.jpg)

## <div align="center">[Read the Sass-versioning API documentation](https://dominikwilkowski.github.io/sass-versioning/sassdoc/)</div>

## Content

* [Usage](#usage)
* [Build](#build)
* [Test](#test)
* [Release History](#release-history-remote)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage

Sass-versioning replies on [semantically versioned](http://semver.org/) modules. According to `semver` a major version will break backwards compatibility while
minor and patch versions keep backwards compatibility intact so this script will throw errors only on major version mismatches and when a module can't be found.

### Example

If you have multiple versioned Sass modules and need to defined dependencies amongst them, this is for you.

Imagine you have a couple modules:

**core `v1.0.0`**
```scss
@mixin mixins {
	//some awesome css in a mixin we called "mixins" because #namingishard
}
```

**core `v2.0.0`**
```scss
@mixin core {
	//some awesome css in a mixin we renamed to "core"
}
```

**grid `v1.1.0`**
```scss
@import "core";

@include mixins(); //we clearly need version 1.0.0 of the core module with the old named mixin
                   //this will fail if you only @import core v2.0.0
```

**accordion `v2.0.0`**
```scss

@include core(); //this module has been updated to digest the new version of core 2.0.0
                 //this will fail if you only @import core v1.0.0
```

Each of these come with interdependencies and we need to check for conflicts. Like if grid was dependent on core `v1.0.0` but only `v2.0.0` was imported or on
an entirely different module that we don’t even have in our imports. To see more examples check out the `./test/` folder.

To make sure this works, we need to **register each module** and at the bottom of all imports **check for conflicts** and throw errors on conflicts.

### Register

To register a module you need three parameter and call the `versioning-add` mixin. You do that in each module that can possibly be dependent upon.

```scss
$name: "accordion";   //the name of this module
$version: "1.0.0";    //the version of this module
                      //all dependencies of that module
                      //this module depends on a module named "core" at version "2.0.0"
                      //this module depends on a module named "grid" at version "1.0.0"
$dependencies: (
	("core", "2.0.0"),
	("grid", "1.0.0"),
);

@include versioning-add( $name, $version, $dependencies ); //call the mixin to register your module

//add some awesome Sass here
```

If your module has no dependencies you can simply leave the `$dependencies` empty. That would look like this:

```scss
$name: "core";
$version: "2.0.0";
$dependencies: ();  //no dependencies

@include versioning-add( $name, $version, $dependencies );

//add some awesome Sass here
```

### Removing a dependency

Sometimes you may want to remove a dependency before checking for conflicts as, while the module is a dependency, it may not come with a sass file.

```scss
@include versioning-remove( 'grid' );
```

This will remove the `grid` module from all dependencies. Make sure you run `versioning-remove` before `versioning-check()` though.


### Check for conflicts

When you include all those modules you now need to check for conflicts with the `versioning-check()` mixin. Make sure you call this at the bottom after all
includes.

```scss
@import "module1";
@import "module2";
@import "module3";

@include versioning-check();
```

This mixin will throw a descriptive `@error` if it finds a conflicts.

```shell
$ sass test2.scss test.css
Error: The module "grid" requires "core" v2.0.1. But "core" v2.0.0 included.
        on line 510 of ../dist/index.scss, in "versioning-check"
        from line 63 of test2.scss

$ sass test3.scss test.css
Error: The module "grid" requires "core" v1.0.0. But "core" v2.0.0 included.
        on line 510 of ../dist/index.scss, in "versioning-check"
        from line 63 of test3.scss

$ sass test4.scss test.css
Error: The module "grid" requires "core" v2.1.0. But "core" v2.0.0 included.
        on line 510 of ../dist/index.scss, in "versioning-check"
        from line 63 of test4.scss

$ sass test5.scss test.css
Error: The module "grid" requires "core" v3.0.0. But "core" v2.0.0 included.
        on line 510 of ../dist/index.scss, in "versioning-check"
        from line 63 of test5.scss

$ sass test6.scss test.css
Error: The module "grid" requires "buttons" v1.0.0. But the dependency is missing entirely
        on line 516 of ../dist/index.scss, in "versioning-check"
        from line 63 of test6.scss
```


**[⬆ back to top](#content)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Build

We got three npm scripts you can run:

- `concat`
- `generate-doc`
- `test`
- `watch`

**`concat`**

Deletes the `./dist/` folder, creates it again (to make sure we always have the latest in the folder)
and concatenates all files from `./src/` into `./dist/index.scss`.

**`generate-doc`**

Using [Sassdoc](http://sassdoc.com/) this task generates the documentation for our Sass into the `./sassdoc/` folder.

**`test`**

Will run the [test described below](#test).

**`watch`**

Our watch checks for changes inside the `./src/` folder and runs the `concat`, `generate-doc` and `test` tasks.


**[⬆ back to top](#content)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Test

To test run `npm test` in the project folder. The test script will run over each `*.scss` file inside the `./test/` folder. Each of those files has a comment
at the very first line of the file that looks like this:

```scss
// expected: [expected error message]

.some-css {} //etc
```

The test script will compare the error message found here `[expected error message]` against what [node-sass](https://github.com/sass/node-sass) outputs.


**[⬆ back to top](#content)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.3.0 - Added `versioning-remove`
* v0.2.2 - Renamed to sass partial naming convention
* v0.2.1 - Fixed package.json files array
* v0.2.0 - Added eyeglass support, moved to @HugoGiraudel excellent sass-semver, added more docs
* v0.1.2 - Tweaked code credit
* v0.1.1 - Added to documentation
* v0.1.0 - Initial starting point

**[⬆ back to top](#content)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Dominik Wilkowski. Licensed under the [GPL-3.0](https://raw.githubusercontent.com/dominikwilkowski/sass-versioning/master/LICENSE).

**[⬆ back to top](#content)**

# };