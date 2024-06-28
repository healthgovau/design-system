'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

/*
 * Get the release verson from package.json
 */
// const pkg = require(path.join(__dirname, '/package.json'));
const pkg = require('../package.json');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Health Design System');
fractal.set('project.version', pkg.version);
fractal.set('project.author', 'Australian Government Department of Health and Aged Care');
fractal.set('project.repo', 'https://github.com/healthgovau/health-design-system');
/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview-page');
fractal.components.set('statuses', {
    wip: {
        label: "wip",
        description: "Work-in-progress",
        color: '#d34600'
    },
    ready: {
        label: "ready",
        description: "Ready for use.",
        color: "#158839"
    }
});

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('title', 'Foundations'); // default is 'Documentation'

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('favicon', path.join(__dirname, 'favicon.ico'));
/* Generated HTML export destination */
fractal.web.set('builder.dest', __dirname + '/../docs');

/*
 * Theme
 */

// create a new instance with custom config options
const healthTheme = mandelbrot({
    skin: {
        name: 'white',
        accent: '#014181',
        complement: '#FFFFFF',
        links: '#006fb0',
    },
    nav: [
        'information',
        'search',
        'docs',
        'components'
    ],
    panels: [
        'notes',
        'html',
        'view',
        'resources',
        'info'
    ],
    styles: [
        'default',
        '/themes/health/theme.css'
    ],
    navigation: 'split',
    information: [
        {
            label: 'Version',
            value: require('../package.json').version,
        },
        {
            label: 'Build date',
            value: new Date(),
            type: 'time',
            format: (value) => {
                return value.toLocaleDateString('en-GB');
            },
        },
    ],
});


fractal.web.theme(healthTheme);
