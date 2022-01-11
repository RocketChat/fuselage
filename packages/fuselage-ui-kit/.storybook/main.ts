module.exports = {
  addons: ['@storybook/addon-essentials', 'storycap'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],
  features: {
    postcss: false,
  },
};
