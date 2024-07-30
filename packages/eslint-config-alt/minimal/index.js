/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['../original', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/named': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'alphabetize': {
          order: 'asc',
        },
      },
    ],
    'indent': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
};
