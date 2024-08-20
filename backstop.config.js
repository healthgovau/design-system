const accordion = require('./backstop_data/modules/Accordion');
const accordionGroup = require('./backstop_data/modules/AccordionGroup');
const backToTop = require('./backstop_data/modules/BackToTop');
const callout = require('./backstop_data/modules/Callout');
const card = require('./backstop_data/modules/Card');
const facet = require('./backstop_data/modules/Facet');
const figure = require('./backstop_data/modules/Figure');
const file = require('./backstop_data/modules/File');
const filter = require('./backstop_data/modules/Filter');
const formControls = require('./backstop_data/modules/FormControls');
const image = require('./backstop_data/modules/Image');
const layout = require('./backstop_data/modules/Layout');
const link = require('./backstop_data/modules/Link');
const listing = require('./backstop_data/modules/Listing');
const lists = require('./backstop_data/modules/Lists');
const metadata = require('./backstop_data/modules/Metadata');
const navigation = require('./backstop_data/modules/Navigation');
const pageAlerts = require('./backstop_data/modules/PageAlerts');
const pageRegions = require('./backstop_data/modules/PageRegions');
const quickExit = require('./backstop_data/modules/QuickExit');
const references = require('./backstop_data/modules/References');
const releaseStatus = require('./backstop_data/modules/ReleaseStatus');
const separator = require('./backstop_data/modules/Separator');
const stepIndicator = require('./backstop_data/modules/StepIndicator');
const subtitle = require('./backstop_data/modules/Subtitle');
const supplementaryContent = require('./backstop_data/modules/SupplementaryContent');
const table = require('./backstop_data/modules/Table');
const tags = require('./backstop_data/modules/Tags');
const toolbar = require('./backstop_data/modules/Toolbar');
const tooltip = require('./backstop_data/modules/Tooltip');
const typography = require('./backstop_data/modules/Typography');
const utilities = require('./backstop_data/modules/Utilities');
const video = require('./backstop_data/modules/Video');

const scenarios = [];

const components = [
  ...accordion,
  ...accordionGroup,
  ...backToTop,
  ...callout,
  ...card,
  ...facet,
  ...figure,
  ...file,
  ...filter,
  ...formControls,
  ...image,
  ...layout,
  ...link,
  ...listing,
  ...lists,
  ...metadata,
  ...navigation,
  ...pageAlerts,
  ...pageRegions,
  ...quickExit,
  ...references,
  ...releaseStatus,
  ...separator,
  ...stepIndicator,
  ...subtitle,
  ...supplementaryContent,
  ...table,
  ...tags,
  ...toolbar,
  ...tooltip,
  ...typography,
  ...utilities,
  ...video,
];

components.forEach((component) => {
  const scenario = {
    label: component.label,
    cookiePath: 'backstop_data/engine_scripts/cookies.json',
    url: component.url,
    referenceUrl: '',
    readyEvent: '',
    readySelector: '',
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: '',
    clickSelector: '',
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
    viewports: component.viewports ? component.viewports : [],
  };

  scenarios.push(scenario);
});

const config = {
  id: 'backstop_default',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480,
    },
    {
      label: 'desktop',
      width: 1920,
      height: 1080,
    }
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['ci'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};

module.exports = config;
