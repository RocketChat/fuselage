import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import StandaloneServerPage from './StandaloneServerPage';

type Args = ComponentProps<typeof StandaloneServerPage>;

export default {
  title: 'pages/StandaloneServerPage',
  component: StandaloneServerPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _StandaloneServerPage: Story<Args> = (args) => (
  <StandaloneServerPage {...args} />
);
_StandaloneServerPage.storyName = 'StandaloneServerPage';
