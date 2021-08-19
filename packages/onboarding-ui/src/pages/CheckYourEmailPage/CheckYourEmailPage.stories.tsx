import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CheckYourEmailPage from './CheckYourEmailPage';

type Args = ComponentProps<typeof CheckYourEmailPage>;

export default {
  title: 'pages/CheckYourEmailPage',
  component: CheckYourEmailPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _CheckYourEmailPage: Story<Args> = (args) => (
  <CheckYourEmailPage {...args} />
);
_CheckYourEmailPage.storyName = 'CheckYourEmailPage';
