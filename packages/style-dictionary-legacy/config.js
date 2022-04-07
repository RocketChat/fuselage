const tokens = require("./tokens");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      transformGroup: "custom/js",
      buildPath: "build/js/",
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: "cjsmodule",
        filter: (token) => token.group === tokenCategory,
      })),
    },
    json: {
      transformGroup: "custom/js",
      buildPath: "build/json/",
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.json`,
        format: "json/nested",
        filter: (token) => token.group === tokenCategory,
      })),
    },
    json: {
      transformGroup: "custom/js",
      buildPath: "build/js/",
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.mjs`,
        format: "mjsmodule",
        filter: (token) => token.group === tokenCategory,
      })),
    },
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.scss`,
        format: "scss/map-flat",
        filter: (token) => token.group === tokenCategory,
      })),
    },
  },
};
