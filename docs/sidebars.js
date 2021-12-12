/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      collapsed: false,
      type: "category",
      label: "Getting started",
      items: ["getting-started/installation", "getting-started/hello-world"],
    },
    {
      collapsed: false,
      type: "category",
      label: "Paint",
      items: ["paint/overview", "paint/properties"],
    },
    {
      type: "doc",
      label: "Group",
      id: "group",
    },
    {
      type: "doc",
      label: "Image",
      id: "image",
    },
    {
      collapsed: false,
      type: "category",
      label: "Shaders",
      items: [
        "shaders/language",
        "shaders/images",
        "shaders/gradients",
        "shaders/perlin-noise",
        "shaders/colors",
      ],
    },
    {
      collapsed: false,
      type: "category",
      label: "Effects",
      items: ["mask-filters", "color-filters", "image-filters", "path-effects"],
    },
    {
      collapsed: false,
      type: "category",
      label: "Shapes",
      items: ["shapes/path", "shapes/polygons", "shapes/ellipses"],
    },
    {
      collapsed: false,
      type: "category",
      label: "Animations",
      items: ["animations/overview"],
    },
  ],
};

module.exports = sidebars;