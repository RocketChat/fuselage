module.exports = {
  extends: [
    '@rocket.chat/eslint-config',
  ],
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',
  rules: {
    'generator-star-spacing': ['error', 'before'],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      alphabetize: {
        order: 'asc',
      },
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
  },
};
