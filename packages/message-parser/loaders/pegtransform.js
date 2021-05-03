const pegjs = require('peggy');

module.exports = {
  process: (content) =>
    pegjs.generate(content, {
      output: 'source',
      format: 'commonjs',
    }),
};
