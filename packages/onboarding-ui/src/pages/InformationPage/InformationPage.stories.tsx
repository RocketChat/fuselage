import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import InformationPage from './InformationPage';

type Args = ComponentProps<typeof InformationPage>;

export default {
  title: 'pages/InformationPage',
  component: InformationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    title: 'Place your title here',
    description: 'Place your description here',
  },
} as Meta<Args>;

export const _InformationPage: Story<Args> = (args) => (
  <InformationPage {...args} />
);
_InformationPage.storyName = 'InformationPage';
