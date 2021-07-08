import type { Story, Meta } from '@storybook/react';

import AccountEmailForm from './AccountEmailForm';

export default {
  title: 'forms/AccountEmailForm',
  component: AccountEmailForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta;

export const _AccountEmailForm: Story = (args) => (
  <AccountEmailForm
    onReturn={() => undefined}
    onSubmit={(data: any) => console.log(data)}
    {...args}
  />
);
_AccountEmailForm.storyName = 'AccountEmailForm';
