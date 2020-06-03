const path = require('path');

module.exports = {
  extends: ['@rocket.chat/eslint-config'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']]
    }],
    'no-extra-parens': 'off'
  },
  'env': {
    'jest': true,
  },
};
