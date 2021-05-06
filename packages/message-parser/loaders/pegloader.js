const pegjs = require('peggy');

module.exports = (content) =>
  pegjs.generate(content, {
    output: 'source',
    format: 'commonjs',
  });
