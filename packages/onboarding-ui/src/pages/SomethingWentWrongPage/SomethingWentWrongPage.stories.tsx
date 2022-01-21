import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import SomethingWentWrongPage from './SomethingWentWrongPage';

type Args = ComponentProps<typeof SomethingWentWrongPage>;

export default {
  title: 'pages/SomethingWentWrongPage',
  component: SomethingWentWrongPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    requestId: '6818214a-f735-4f80-ba37-f9e909db7b08',
  },
} as Meta<Args>;

export const _SomethingWentWrongPage: Story<Args> = (args) => (
  <SomethingWentWrongPage {...args} />
);

_SomethingWentWrongPage.storyName = 'SomethingWentWrongPage';
