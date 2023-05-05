/** @type {import('@storybook/react/types').StorybookConfig} */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],
};
