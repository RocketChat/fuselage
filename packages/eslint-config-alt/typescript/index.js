module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    '../minimal',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
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
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-redeclare': 'off',
    'no-spaced-func': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
