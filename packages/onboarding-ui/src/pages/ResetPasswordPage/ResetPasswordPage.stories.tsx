import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import ResetPasswordPage from './ResetPasswordPage';

type Args = ComponentProps<typeof ResetPasswordPage>;

export default {
  title: 'pages/ResetPasswordPage',
  component: ResetPasswordPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    validateEmail: { action: 'validateEmail' },
  },
  args: {
    control: { type: 'inline-radio' },
  },
} as Meta<Args>;

export const _ResetPasswordPage: Story<Args> = (args) => (
  <ResetPasswordPage {...args} />
);

_ResetPasswordPage.storyName = 'ResetPasswordPage';
