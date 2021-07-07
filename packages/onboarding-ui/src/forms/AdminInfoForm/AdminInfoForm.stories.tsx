import type { Story, Meta } from '@storybook/react';

import AdminInfoForm from './AdminInfoForm';

export default {
  title: 'forms/AdminInfoForm',
  component: AdminInfoForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _AdminInfoForm: Story = (args) => <AdminInfoForm {...args} />;
_AdminInfoForm.storyName = 'AdminInfoForm';
