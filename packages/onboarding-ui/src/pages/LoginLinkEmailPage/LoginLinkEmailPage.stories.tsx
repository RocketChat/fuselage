import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoginLinkEmailPage from './LoginLinkEmailPage';

type Args = ComponentProps<typeof LoginLinkEmailPage>;

export default {
  title: 'pages/LoginLinkEmailPage',
  component: LoginLinkEmailPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _LoginLinkEmailPage: Story<Args> = (args) => (
  <LoginLinkEmailPage {...args} />
);
_LoginLinkEmailPage.storyName = 'LoginLinkEmailPage';
