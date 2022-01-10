import type { Story, Meta } from '@storybook/react';

import EmailConfirmedPage from './EmailConfirmedPage';

export default {
  title: 'pages/EmailConfirmedPage',
  component: EmailConfirmedPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const _EmailConfirmedPage: Story = (args) => (
  <EmailConfirmedPage {...args} />
);
_EmailConfirmedPage.storyName = 'EmailConfirmedPage';
