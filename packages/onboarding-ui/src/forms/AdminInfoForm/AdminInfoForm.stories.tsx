import type { Story, Meta } from '@storybook/react';
import { SubmitHandler } from 'react-hook-form';

import AdminInfoForm, { AdminInfoFormInputs } from './AdminInfoForm';

export default {
  title: 'forms/AdminInfoForm',
  component: AdminInfoForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta;

export const onSubmit: SubmitHandler<AdminInfoFormInputs> = (data) =>
  console.log(data);

export const _AdminInfoForm: Story = (args) => (
  <AdminInfoForm onSubmit={onSubmit} {...args} />
);
_AdminInfoForm.storyName = 'AdminInfoForm';
