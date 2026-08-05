import tokens from './src/index.js';

export default {
  source: ['src/**/*.json'],
  platforms: {
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
          filter: (token) => token.filePath.startsWith(`src/${tokenCategory}/`),
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
        filter: (token) => token.filePath.startsWith(`src/${tokenCategory}/`),
      })),
    },
  },
};
