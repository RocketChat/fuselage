import type { Story, Meta } from '@storybook/react';

import BackgroundLayer from '../../../dist/cjs/common/BackgroundLayer';
import OrganizationInfoForm from './OrganizationInfoForm';

export default {
  title: 'forms/OrganizationInfoForm',
  component: OrganizationInfoForm,
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

export const _OrganizationInfoForm: Story = (args) => (
  <OrganizationInfoForm {...args} />
);
_OrganizationInfoForm.storyName = 'OrganizationInfoForm';
