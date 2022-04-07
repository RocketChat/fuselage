const StyleDictionary = require("style-dictionary");

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: "lowerCase",
  type: "value",
  matcher: (token) => token.group === "color",
  transformer: function (token) {
    return token.name.toLowerCase();
  },
});

StyleDictionary.registerTransform({
  name: "breakpointObject",
  type: "value",
  matcher: (token) => token.filePath.includes("breakpoints"),
  transformer: (token) => {
    return token.value;
  },
});

// Register custom transform to the platform

StyleDictionary.registerTransformGroup({
  name: "custom/js",
  transforms: ["lowerCase", "breakpointObject"],
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["scss"],
});

StyleDictionary.registerFormat({
  name: "cjsmodule",
  formatter: function ({ dictionary }) {
    return `module.exports = {${dictionary.allTokens.map((token) => {
      if (token.filePath.includes("colors")) {
        return `\n\t${token.name.toString()}: "${token.original.value}"`;
      } else {
        console.log(token);
        return `\n\t${token.name}: ${JSON.stringify(token.original.value)}`;
      }
    })}\n};`;
  },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend("./config.js");

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
