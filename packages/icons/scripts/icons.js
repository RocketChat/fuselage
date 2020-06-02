const path = require('path');
const { promisify } = require('util');

const glob = promisify(require('glob'));
const {
  Ps: punctuationStartCharacters,
  Pe: punctuationEndCharacters,
  Pi: initialPunctuationCharacters,
  Pf: finalPunctuationCharacters,
} = require('unicode/category');

const { logStep } = require('./log');

const startCharacters = [
  ...Object.values(punctuationStartCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(initialPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const endCharacters = [
  ...Object.values(punctuationEndCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(finalPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const getIcons = async (srcPath) => {
  const step = logStep('Read icons');

  const paths = await glob(path.join(srcPath, '**/*.svg'));

  step.resolve();

  const descriptors = paths
    .map((_path, i) => {
      const [, name,, type] = /^(.*?)(\.([a-z]+))?$/.exec(path.basename(_path, '.svg'));
      return {
        name,
        type,
        path: _path,
        ...(type === 'dir' && {
          startCharacter: startCharacters[i],
          endCharacter: endCharacters[i],
        })
        || (type === 'other' && {})
        || {
          startCharacter: String.fromCodePoint(0xe000 + i),
        },
      };
    })
    .sort(({ name: a }, { name: b }) => a.localeCompare(b));

  step.resolve();

  return descriptors;
};

module.exports.getIcons = getIcons;
