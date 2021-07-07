import type { Story, Meta } from '@storybook/react';

import OrganizationInfoForm from './OrganizationInfoForm';

export default {
  title: 'forms/OrganizationInfoForm',
  component: OrganizationInfoForm,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _OrganizationInfoForm: Story = (args) => (
  <OrganizationInfoForm {...args} />
);
_OrganizationInfoForm.storyName = 'OrganizationInfoForm';
