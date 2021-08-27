import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import MagicLinkEmailPage from './MagicLinkEmailPage';

type Args = ComponentProps<typeof MagicLinkEmailPage>;

export default {
  title: 'pages/MagicLinkEmailPage',
  component: MagicLinkEmailPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _MagicLinkEmailPage: Story<Args> = (args) => (
  <MagicLinkEmailPage {...args} />
);
_MagicLinkEmailPage.storyName = 'MagicLinkEmailPage';
