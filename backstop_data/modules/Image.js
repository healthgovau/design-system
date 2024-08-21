const viewports = [
  {
    label: "component",
    width: 900,
    height: 570,
  },
];

const components = [
  {
    label: "Image - Default",
    url: "http://localhost:3000/components/preview/image--default",
    viewports,
  },
  {
    label: 'Image - Border',
    url: 'http://localhost:3000/components/preview/image--border',
    viewports,
  },
  {
    label: 'Image - Link',
    url: 'http://localhost:3000/components/preview/image--link',
    viewports,
  },
  {
    label: 'Image - Border Link',
    url: 'http://localhost:3000/components/preview/image--border-link',
    viewports,
  },
];

module.exports = components;
