import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: ['../src/**/*.stories.tsx', '../src/**/stories.tsx'],

  docs: {
    autodocs: true,
  },
};

export default config;
