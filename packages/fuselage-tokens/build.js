import StyleDictionary from 'style-dictionary';

console.log('Build started...');
console.log('\n==============================================');

const arrayTocamelCase = (arr) =>
  arr
    .map((item, i) => (i === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');

const encodeJson = (data) =>
  JSON.stringify(data, null, 2).replace(
    /[\u007f-\uffff]/g,
    (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`,
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
  transforms: ['name/camel'],
});

StyleDictionary.registerFormat({
  name: 'custom/colors-json',
  async format({ dictionary }) {
    return `{${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.path[1])}: ${encodeJson(token.original.value)}`,
    )}\n}`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/breakpoints-json',
  async format({ dictionary }) {
    return `[${dictionary.allTokens.map(
      (token) => `\n\t${encodeJson(token.original.value)}`,
    )}\n]`;
  },
});

StyleDictionary.registerFormat({
  name: 'cjsmodule',
  async format({ dictionary }) {
    return `module.exports = {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.name)}: ${encodeJson(token.original.value)}`,
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'camelCase',
  async format({ dictionary }) {
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
  async format({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.name)}: ${encodeJson(token.original.value)}`,
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/colors-mjs',
  async format({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) =>
        `\n\t${encodeJson(token.path[1])}: ${encodeJson(token.original.value)}`,
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/scss',
  async format({ dictionary }) {
    // Get group name through folder name ./src/******
    const exp = /[a-z]+\/([a-z]+)\/[a-z]+.json/i;
    const [, group] = dictionary.allTokens[0].filePath.match(exp);
    const newPaletteGroup = [
      'badge',
      'background',
      'surface',
      'stroke',
      'shadow',
      'button',
      'font',
      'status',
      'statusBullet',
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
            group === 'colors' ? token.path[1] : token.name,
          )}:${toScssValue(token.value)},`,
      )
      .join('')})`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/typography-scss',
  async format({ dictionary }) {
    return `${dictionary.allTokens
      .map((token) => `$${token.name}: \n${toScssValue(token.value)};`)
      .join('')}`;
  },
});

// APPLY THE CONFIGURATION
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = new StyleDictionary('./config.js');

await StyleDictionaryExtended.hasInitialized;

// Build all platforms
await StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
