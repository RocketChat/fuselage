module.exports = {
  extends: ['@rocket.chat/eslint-config'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
    }],
  },
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx'
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        '@rocket.chat/eslint-config'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          legacyDecorators: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/indent': [
          'error',
          'tab'
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': [
          'error',
          'always'
        ],
      },
      env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: [
              '.js',
              '.ts',
              '.tsx'
            ],
          },
        },
      },
    },
  ],
};
