const path = require('path');

module.exports = {
  extends: ['@rocket.chat/eslint-config'],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions:{
    "ecmaVersion": 11,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
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
    react: {
      version: 'detect',
    },
  },
  'env': {
    'jest': true,
  },
};
