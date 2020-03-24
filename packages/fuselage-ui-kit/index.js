if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/fuselage-ui-kit.production.js');
} else {
  module.exports = require('./dist/fuselage-ui-kit.development.js');
}
