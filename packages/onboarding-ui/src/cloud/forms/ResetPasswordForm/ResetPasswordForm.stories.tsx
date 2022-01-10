import type { Meta, Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import ResetPasswordForm from './ResetPasswordForm';

type Args = ComponentProps<typeof ResetPasswordForm>;

export default {
  title: 'forms/ResetPasswordForm',
  component: ResetPasswordForm,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<Args>;

export const _ResetPasswordForm: Story<Args> = (args) => (
  <ResetPasswordForm {...args} />
);
_ResetPasswordForm.storyName = 'ResetPasswordForm';
