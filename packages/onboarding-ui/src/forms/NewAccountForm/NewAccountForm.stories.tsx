import type { StoryFn, Meta } from '@storybook/react-vite';

import NewAccountForm from './NewAccountForm.js';

export default {
  title: 'forms/NewAccountForm',
  component: NewAccountForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    validateEmail: { action: 'validateEmail' },
    validatePassword: { action: 'validatePassword' },
    validateConfirmationPassword: { action: 'validateConfirmationPassword' },
  },
  args: {},
} satisfies Meta<typeof NewAccountForm>;

export const _NewAccountForm: StoryFn<typeof NewAccountForm> = (args) => (
  <NewAccountForm {...args} />
);
_NewAccountForm.storyName = 'NewAccountForm';
