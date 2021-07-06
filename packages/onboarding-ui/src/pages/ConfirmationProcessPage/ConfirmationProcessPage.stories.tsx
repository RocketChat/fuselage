import type { Story, Meta } from '@storybook/react';

import ConfirmationProcessPage from './ConfirmationProcessPage';

export default {
  title: 'pages/ConfirmationProcessPage',
  component: ConfirmationProcessPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _ConfirmationProcessPage: Story = (args) => (
  <ConfirmationProcessPage {...args} />
);
_ConfirmationProcessPage.storyName = 'ConfirmationProcessPage';
