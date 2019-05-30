// .happo.js
const { RemoteBrowserTarget } = require("happo.io");
const happoPluginStorybook = require("happo-plugin-storybook");
module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    "internet explorer": new RemoteBrowserTarget("internet explorer", {
      viewport: "1024x768"
    }),
    safari: new RemoteBrowserTarget("safari", {
      viewport: "1024x768"
    }),
    "ios-safari": new RemoteBrowserTarget("ios-safari", {
      viewport: "375x667"
    }),
    chrome: new RemoteBrowserTarget("chrome", {
      viewport: "1024x768"
    }),
    firefox: new RemoteBrowserTarget("firefox", {
      viewport: "1024x768"
    }),
    edge: new RemoteBrowserTarget("edge", {
      viewport: "1024x768"
    }),
  },
  plugins: [
    // see https://github.com/happo/happo-plugin-storybook for a list of options you can pass to the plugin
    happoPluginStorybook()
  ]
};
