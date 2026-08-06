import { kebabCase } from 'change-case';
import StyleDictionary from 'style-dictionary';
import { minifyDictionary } from 'style-dictionary/utils';

console.log('Build started...');
console.log('\n==============================================');

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

StyleDictionary.registerFormat({
  name: 'json/rocketchat',
  async format({ dictionary }) {
    const tokens = dictionary.tokens[Object.keys(dictionary.tokens)[0]];
    return `${JSON.stringify(minifyDictionary(tokens, false), null, 2)}\n`;
  },
});

StyleDictionary.registerTransform({
  name: 'name/kebab/rocketchat',
  type: 'name',
  transform: (token) => kebabCase(token.path.slice(1).join(' ')),
});

StyleDictionary.registerTransform({
  name: 'fontFamily/css/rocketchat',
  type: 'value',
  filter: (token) => token.attributes.type === 'fontFamily',
  transform: (token) => {
    if (Array.isArray(token.value)) {
      return `(${token.value.map((font) => (font.match(/\s/) ? `'${font}'` : font)).join(', ')})`;
    }

    return token.value;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'scss/rocketchat',
  transforms: [
    'attribute/cti',
    'name/kebab/rocketchat',
    'time/seconds',
    'html/icon',
    // 'size/rem',
    'color/css',
    'asset/url',
    'fontFamily/css/rocketchat',
    'cubicBezier/css',
    'strokeStyle/css/shorthand',
    'border/css/shorthand',
    'typography/css/shorthand',
    'transition/css/shorthand',
    'shadow/css/shorthand',
  ],
});

StyleDictionary.registerFormat({
  name: 'custom/breakpoints-json',
  async format({ dictionary }) {
    return `[${dictionary.allTokens.map(
      (token) => `\n\t${encodeJson(token.value)}`,
    )}\n]`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom/scss',
  async format({ dictionary }) {
    // Get group name through folder name ./src/******
    const exp = /[a-z]+\/([a-z]+)\/[a-z]+.json/i;
    const [, group] = dictionary.allTokens[0].filePath.match(exp);
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

// APPLY THE CONFIGURATION
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = new StyleDictionary('./config.js');

await StyleDictionaryExtended.hasInitialized;

// Build all platforms
await StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
