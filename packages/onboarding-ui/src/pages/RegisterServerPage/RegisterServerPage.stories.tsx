import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisterServerPage from './RegisterServerPage';

type Args = ComponentProps<typeof RegisterServerPage>;

export default {
  title: 'pages/RegisterServerPage',
  component: RegisterServerPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
    onSubmit: (data) => console.log(data),
    onBackButtonClick: () => console.log('Back'),
  },
} as Meta<Args>;

export const _RegisterServerPage: Story<Args> = (args) => (
  <RegisterServerPage {...args} />
);
_RegisterServerPage.storyName = 'RegisterServerPage';
