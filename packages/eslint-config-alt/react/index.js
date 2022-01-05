module.exports = {
  extends: '../minimal',
  plugins: ['react', 'react-hooks'],
  parser: '@babel/eslint-parser',
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/display-name': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/no-multi-comp': 'error',
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
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
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: '../typescript',
      parser: '@typescript-eslint/parser',
      plugins: ['react', 'react-hooks'],
      rules: {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/display-name': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/no-multi-comp': 'error',
        'react/react-in-jsx-scope': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
      env: {
        browser: true,
        es6: true,
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
    },
    {
      files: [
        '**/*.stories.js',
        '**/*.stories.jsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
      rules: {
        'react/display-name': 'off',
        'react/no-multi-comp': 'off',
      },
    },
  ],
};
