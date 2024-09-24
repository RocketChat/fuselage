import type { Meta, StoryFn } from '@storybook/react';

import LoginLinkEmailPage from './LoginLinkEmailPage';

export default {
  title: 'pages/LoginLinkEmailPage',
  component: LoginLinkEmailPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginLinkEmailPage>;

export const _LoginLinkEmailPage: StoryFn<typeof LoginLinkEmailPage> = (
  args
) => <LoginLinkEmailPage {...args} />;
_LoginLinkEmailPage.storyName = 'LoginLinkEmailPage';
