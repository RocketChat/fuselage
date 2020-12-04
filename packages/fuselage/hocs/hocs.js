if (process.env.NODE_ENV === 'production') {
  module.exports = require('../dist/fuselage-hocs.production.js');
} else {
  module.exports = require('../dist/fuselage-hocs.development.js');
}
