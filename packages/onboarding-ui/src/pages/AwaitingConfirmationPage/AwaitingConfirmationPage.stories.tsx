import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import AwaitingConfirmationPage from './AwaitingConfirmationPage';

type Args = ComponentProps<typeof AwaitingConfirmationPage>;

export default {
  title: 'pages/AwaitingConfirmationPage',
  component: AwaitingConfirmationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _AwaitingConfirmationPage: Story<Args> = (args) => (
  <AwaitingConfirmationPage {...args} />
);
_AwaitingConfirmationPage.storyName = 'AwaitingConfirmationPage';
_AwaitingConfirmationPage.args = {
  securityCode: 'Funny Tortoise In The Hat',
  emailAddress: 'emailname@email.com',
};
