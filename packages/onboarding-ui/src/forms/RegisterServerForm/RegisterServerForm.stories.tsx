import type { Story, Meta } from '@storybook/react';

import RegisterServerForm from '.';
import BackgroundLayer from '../../../dist/cjs/common/BackgroundLayer';

export default {
  title: 'forms/RegisterServerForm',
  component: RegisterServerForm,
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

export const _RegisterServerForm: Story = (args) => (
  <RegisterServerForm {...args} />
);
_RegisterServerForm.storyName = 'RegisterServerForm';
