module.exports = {
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],
  features: {
    postcss: false,
  },
};
