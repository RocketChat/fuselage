const path = require('path');

module.exports = {
  extends: ['@rocket.chat/eslint-config'],
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.join(__dirname, '..'),
      },
    },
  },
  'env': {
    'jest': true,
  },
};
