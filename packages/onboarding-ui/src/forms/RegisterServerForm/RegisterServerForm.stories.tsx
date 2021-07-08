import type { Story, Meta } from '@storybook/react';

import RegisterServerForm from '.';

export default {
  title: 'forms/RegisterServerForm',
  component: RegisterServerForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta;

export const _RegisterServerForm: Story = (args) => (
  <RegisterServerForm
    onReturn={() => undefined}
    onSubmit={(data: any) => console.log(data)}
    {...args}
  />
);
_RegisterServerForm.storyName = 'RegisterServerForm';
