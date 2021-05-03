const pegjs = require('peggy');

module.exports = {
  process(content) {
    return pegjs.generate(content, {
      output: 'source',
      format: 'commonjs',
      // plugins: [tspegjs],
      headerComments: {
        customHeader: `// import lib\nimport {
      bold,
      italic,
      plain,
      link,
      paragraph,
      code,
      heading,
      strike,
      inlineCode } from './utils';`,
      },
    });
  },
};
