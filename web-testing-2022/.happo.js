// .happo.js
const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  project: "web-test-2022",
  targets: {
    "chrome-1080p": new RemoteBrowserTarget("chrome", {
      viewport: "1920x1080",
      freezeAnimations: "last-frame",
    }),
    // all viewports https://viewportsizer.com/devices/
    // 	Samsung Galaxy S10+, S10
    "chrome-galaxy-s10": new RemoteBrowserTarget("chrome", {
      viewport: "360x740",
      freezeAnimations: "last-frame",
    }),
    // iphone viewports https://yesviz.com/iphones.php
    "safari-1080p": new RemoteBrowserTarget("safari", {
      viewport: "1920x1080",
      freezeAnimations: "last-frame",
      // so that safari won't cut off the screenshot at window height
      scrollStitch: true,
    }),
    // iphone 12 pro
    "safari-iphone-12-pro": new RemoteBrowserTarget("safari", {
      viewport: "390x844",
      freezeAnimations: "last-frame",
      scrollStitch: true,
    }),
    "Apple-iPad-Pro-12.9": new RemoteBrowserTarget("safari", {
      viewport: "1024x1366",
      freezeAnimations: "last-frame",
      scrollStitch: true,
    }),
    "Apple-iPad-Air": new RemoteBrowserTarget("safari", {
      viewport: "834x1112",
      freezeAnimations: "last-frame",
      scrollStitch: true,
    }),
    "MacBook Pro 13.3": new RemoteBrowserTarget("safari", {
      viewport: "1280x800",
      freezeAnimations: "last-frame",
      scrollStitch: true,
    }),
    "MacBook Pro 16": new RemoteBrowserTarget("safari", {
      viewport: "1536x960",
      freezeAnimations: "last-frame",
      scrollStitch: true,
    }),
    // iphone 12 pro
    "chrome-650": new RemoteBrowserTarget("chrome", {
      viewport: "650x415",
      freezeAnimations: "last-frame",
    }),
  },
};
