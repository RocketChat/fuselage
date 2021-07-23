import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import InvalidLinkPage from './InvalidLinkPage';

type Args = ComponentProps<typeof InvalidLinkPage>;

export default {
  title: 'pages/InvalidLinkPage',
  component: InvalidLinkPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta<Args>;

export const _InvalidLinkPage: Story<Args> = (args) => (
  <InvalidLinkPage {...args} />
);
_InvalidLinkPage.storyName = 'InvalidLinkPage';
