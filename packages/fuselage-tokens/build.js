const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

const arrayTocamelCase = (arr) =>
  arr
    .map((item, i) => (i === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');

const encodeJson = (data) =>
  JSON.stringify(data, null, 2).replace(
    /[\u007f-\uffff]/g,
    (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`
  );

const toScssIdentifier = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const toScssValue = (chunk) => {
  if (typeof chunk === 'boolean' || typeof chunk === 'number') {
    return chunk;
  }

  if (typeof chunk === 'string') {
    return /\s/.test(chunk) ? encodeJson(chunk) : chunk;
  }

  if (chunk === undefined || chunk === null) {
    return 'null';
  }

  if (Array.isArray(chunk)) {
    return `(${chunk.map(toScssValue).join(',')})`;
  }

  return `(${Object.entries(chunk)
    .map(([key, value]) => `${toScssIdentifier(key)}:${toScssValue(value)}`)
    .join(',')})`;
};

StyleDictionary.registerTransformGroup({
  name: 'custom/mjs',
  transforms: ['name/cti/camel'],
});

StyleDictionary.registerFormat({
  name: 'custom/colors-json',
  formatter({ dictionary }) {
    return `{${dictionary.allTokens.map((token) => {
      console.log(token);
      return `\n\t${encodeJson(token.path[1])}: ${encodeJson(
        token.original.value
      )}`;
    })}\n}`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/breakpoints-json',
  formatter({ dictionary }) {
    return `[${dictionary.allTokens.map(
      (token) => `\n\t${encodeJson(token.original.value)}`
    )}\n]`;
  },
});

StyleDictionary.registerFormat({
  name: 'cjsmodule',
  formatter({ dictionary }) {
    return `module.exports = {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.name)}: ${encodeJson(token.original.value)}`
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'camelCase',
  formatter({ dictionary }) {
    // Get group name through folder name ./src/******
    const exp = /[a-z]+\/([a-z]+)\/[a-z]+.json/i;
    const [, group] = dictionary.allTokens[0].filePath.match(exp);

    return `module.exports = {${dictionary.allTokens.map((token) => {
      const name =
        group === 'colors'
          ? encodeJson(token.path[1])
          : encodeJson(arrayTocamelCase(token.path));

      return `\n\t${name}: ${encodeJson(token.value)}`;
    })}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/mjs',
  formatter({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.name)}: ${encodeJson(token.original.value)}`
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/colors-mjs',
  formatter({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.path[1])}: ${encodeJson(token.original.value)}`
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/scss',
  formatter({ dictionary }) {
    // Get group name through folder name ./src/******
    const exp = /[a-z]+\/([a-z]+)\/[a-z]+.json/i;
    const [, group] = dictionary.allTokens[0].filePath.match(exp);
    const newPaletteGroup = [
      'background',
      'surface',
      'stroke',
      'button',
      'text',
    ];

    if (newPaletteGroup.includes(group)) {
      const subGroup = dictionary.allTokens[0].name.split('-')[0];
      return `$${subGroup}: (${dictionary.allTokens.map((token) => {
        const nameArray = token.name.split('-');
        nameArray.shift();
        const tokenName = nameArray.join('-');
        return `\n${toScssIdentifier(tokenName)}:${toScssValue(token.value)}`;
      })}\n);`;
    }

    return `$${group}: (${dictionary.allTokens
      .map(
        (token) =>
          `\n${toScssIdentifier(
            group === 'colors' ? token.path[1] : token.name
          )}:${toScssValue(token.value)},`
      )
      .join('')})`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/typography-scss',
  formatter({ dictionary }) {
    return `${dictionary.allTokens
      .map((token) => `$${token.name}: \n${toScssValue(token.value)};`)
      .join('')}`;
  },
});

// APPLY THE CONFIGURATION
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend('./config.js');

// Build all platforms
StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
