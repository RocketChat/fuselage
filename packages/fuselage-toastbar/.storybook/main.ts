import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],
};

export default config;
