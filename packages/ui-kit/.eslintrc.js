module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    '@rocket.chat/eslint-config',
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
    'func-call-spacing': 'off',
    indent: 'off',
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      alphabetize: {
        order: 'asc',
      },
    }],
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-redeclare': 'off',
    'no-spaced-func': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'after',
      },
    }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: true,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    }],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true,
    }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
        ],
      },
    },
  },
};
