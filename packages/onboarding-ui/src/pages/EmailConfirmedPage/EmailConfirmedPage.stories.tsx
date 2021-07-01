import type { Story, Meta } from '@storybook/react';

import EmailConfirmedPage from './EmailConfirmedPage';

export default {
  title: 'pages/EmailConfirmedPage',
  component: EmailConfirmedPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    forceDarkMode: {
      options: [undefined, true, false],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <EmailConfirmedPage
    title='Email Confirmed!'
    subtitle='You can return to your Rocket.Chat application – we have launched your workspace already.'
    {...args}
  />
);
