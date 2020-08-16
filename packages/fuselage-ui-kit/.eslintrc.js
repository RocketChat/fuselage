module.exports = {
  extends: [
    '@rocket.chat/eslint-config',
    'plugin:mdx/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
      rules: {
        semi: 'off',
        'new-cap': 'off',
      },
    },
  ],
};
