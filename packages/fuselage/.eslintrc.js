const path = require('path');

module.exports = {
  extends: ['@rocket.chat/eslint-config'],
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']]
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.join(__dirname, '..'),
      },
    },
    react: {
      version: 'detect',
    },
  },
  'env': {
    'jest': true,
  },
};
