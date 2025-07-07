import type { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { config } from '../tamagui.config'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
      source: {
        excludeDecorators: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme="light">
      <Story />
    </TamaguiProvider>
    ),
  ],
};

export default preview;