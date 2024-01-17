module.exports = {
  extends: [
    '@rocket.chat/eslint-config-alt/typescript',
    'plugin:storybook/recommended',
  ],
  env: {
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
