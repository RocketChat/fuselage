import type { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { config } from '../tamagui.config'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
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