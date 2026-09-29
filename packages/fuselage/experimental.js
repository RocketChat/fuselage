/* eslint-disable @typescript-eslint/no-require-imports */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/experimental.production.js');
} else {
  module.exports = require('./dist/experimental.development.js');
}
