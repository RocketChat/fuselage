import type { Story, Meta } from '@storybook/react';

import BackgroundLayer from '../../../dist/cjs/common/BackgroundLayer';
import AdminInfoForm from './AdminInfoForm';

export default {
  title: 'forms/AdminInfoForm',
  component: AdminInfoForm,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BackgroundLayer>
        <Story />
      </BackgroundLayer>
    ),
  ],
} as Meta;

export const _AdminInfoForm: Story = (args) => <AdminInfoForm {...args} />;
_AdminInfoForm.storyName = 'AdminInfoForm';
