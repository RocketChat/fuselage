const tokens = require("./tokens");
const StyleDictionary = require("style-dictionary");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      transformGroup: "custom/js",
      buildPath: "build/js/",
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: "cjsmodule",
        filter: (token) => token.filePath.includes(tokenCategory),
      })),
    },
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          destination: "colors.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
