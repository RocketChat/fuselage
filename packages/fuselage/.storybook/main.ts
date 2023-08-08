import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
    storyStoreV7: true,
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.{mdx,js,tsx}'],
};

export default config;
