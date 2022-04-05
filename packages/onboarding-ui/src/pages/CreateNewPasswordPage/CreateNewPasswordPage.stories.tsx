import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CreateNewPasswordPage from './CreateNewPasswordPage';

type Args = ComponentProps<typeof CreateNewPasswordPage>;

export default {
  title: 'pages/CreateNewPasswordPage',
  component: CreateNewPasswordPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validatePassword: { action: 'validatePassword' },
    validatePasswordConfirmation: { action: 'validatePasswordConfirmation' },
  },
  args: {
    control: { type: 'inline-radio' },
  },
} as Meta<Args>;

export const _CreateNewPasswordPage: Story<Args> = (args) => (
  <CreateNewPasswordPage {...args} />
);

_CreateNewPasswordPage.storyName = 'CreateNewPasswordPage';
