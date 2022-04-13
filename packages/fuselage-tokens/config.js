const tokens = require('./src');

module.exports = {
  source: ['src/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: 'camelCase',
        filter: (token) => token.filePath.includes(tokenCategory),
      })),
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: tokens.map((tokenCategory) => {
        const customFormat = `custom/${tokenCategory}-json`;
        return {
          destination: `${tokenCategory}.json`,
          format:
            tokenCategory === 'breakpoints' || tokenCategory === 'colors'
              ? customFormat
              : 'json/nested',
          filter: (token) => token.filePath.includes(tokenCategory),
        };
      }),
    },
    mjs: {
      transformGroup: 'custom/mjs',
      buildPath: 'dist/',
      files: tokens.map((tokenCategory) => {
        if (tokenCategory === 'colors') {
          return {
            destination: `${tokenCategory}.mjs`,
            format: 'custom/colors-mjs',
            filter: (token) => token.filePath.includes(tokenCategory),
          };
        }
        return {
          destination: `${tokenCategory}.mjs`,
          format: 'custom/mjs',
          filter: (token) => token.filePath.includes(tokenCategory),
        };
      }),
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: tokens.map((tokenCategory) => ({
        destination: `${tokenCategory}.scss`,
        format:
          tokenCategory === 'typography'
            ? 'custom/typography-scss'
            : 'custom/scss',
        filter: (token) => token.filePath.includes(tokenCategory),
      })),
    },
  },
};
