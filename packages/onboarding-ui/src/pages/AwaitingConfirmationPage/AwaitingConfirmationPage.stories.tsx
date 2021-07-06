import type { Story, Meta } from '@storybook/react';

import AwaitingConfirmationPage from './AwaitingConfirmationPage';

export default {
  title: 'pages/AwaitingConfirmationPage',
  component: AwaitingConfirmationPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _AwaitingConfirmationPage: Story = (args) => (
  <AwaitingConfirmationPage {...args} />
);
_AwaitingConfirmationPage.storyName = 'AwaitingConfirmationPage';
