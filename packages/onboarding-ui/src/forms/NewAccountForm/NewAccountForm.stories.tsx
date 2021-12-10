import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import NewAccountForm from './NewAccountForm';

type Args = ComponentProps<typeof NewAccountForm>;

export default {
  title: 'forms/NewAccountForm',
  component: NewAccountForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    validateUsername: { action: 'validateUsername' },
    validateEmail: { action: 'validateEmail' },
    validatePassword: { action: 'validatePassword' },
    validateConfirmPassword: { action: 'validateConfirmPassword' },
  },
  args: {},
} as Meta<Args>;

export const _NewAccountForm: Story<Args> = (args) => (
  <NewAccountForm {...args} />
);
_NewAccountForm.storyName = 'NewAccountForm';
