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
  matcher: (token) => token.group === "breakpoint",
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
    return `module.exports = {${dictionary.allTokens.map(
      (token) =>
        `\n\t${JSON.stringify(token.name)}: ${JSON.stringify(
          token.original.value
        )}`
    )}\n};`;
  },
});
StyleDictionary.registerFormat({
  name: "mjsmodule",
  formatter: function ({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) =>
        `\n\t${JSON.stringify(token.name)}: ${JSON.stringify(
          token.original.value
        )}`
    )}\n};`;
  },
});
const encodeJson = (data) =>
  JSON.stringify(data, null, 2).replace(
    /[\u007f-\uffff]/g,
    (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`
  );

const toScssIdentifier = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

const toScssValue = (chunk) => {
  if (typeof chunk === "boolean" || typeof chunk === "number") {
    return chunk;
  }

  if (typeof chunk === "string") {
    return /\s/.test(chunk) ? encodeJson(chunk) : chunk;
  }

  if (chunk === undefined || chunk === null) {
    return "null";
  }

  if (Array.isArray(chunk)) {
    return `(${chunk.map(toScssValue).join(",")})`;
  }

  return `(${Object.entries(chunk)
    .map(([key, value]) => `${toScssIdentifier(key)}:${toScssValue(value)}`)
    .join(",")})`;
};

StyleDictionary.registerFormat({
  name: "custom/scss",
  formatter: function ({ dictionary }) {
    const group = Object.keys(dictionary.properties).map(
      (key) => dictionary.properties[key].original.group
    );
    return `$${group[0]}: (${dictionary.allTokens
      .map((token) => {
        console.log(token);
        return `\n${toScssIdentifier(token.name)}:${toScssValue(token.value)},`;
      })
      .join("")})`;
  },
});

// APPLY THE CONFIGURATION
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend("./config.js");

// Build all platforms
StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
