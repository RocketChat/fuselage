import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisteredServerPage from './RegisteredServerPage';

type Args = ComponentProps<typeof RegisteredServerPage>;

export default {
  title: 'pages/RegisteredServerPage',
  component: RegisteredServerPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _RegisteredServerPage: Story<Args> = (args) => (
  <RegisteredServerPage {...args} />
);
_RegisteredServerPage.storyName = 'RegisteredServerPage';
