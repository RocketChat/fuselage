module.exports = {
  extends: ['@rocket.chat/eslint-config', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  parser: '@babel/eslint-parser',
  rules: {
    'generator-star-spacing': ['error', 'before'],
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
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      version: 'detect',
    },
  },
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      parserOptions: {
        parser: '@babel/eslint-parser',
      },
      rules: {
        'semi': 'off',
        'new-cap': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
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
      plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'warn',
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
        'operator-linebreak': 'off',
        'prettier/prettier': 2,
        'template-curly-spacing': 'off',
      },
      env: {
        jest: true,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.ts', '.tsx'],
          },
        },
        'react': {
          version: 'detect',
        },
      },
    },
  ],
};
