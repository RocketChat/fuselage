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
    requestId: undefined,
  },
} as Meta<Args>;

export const _SomethingWentWrongPage: Story<Args> = (args) => (
  <SomethingWentWrongPage {...args} />
);

_SomethingWentWrongPage.storyName = 'SomethingWentWrongPage';
