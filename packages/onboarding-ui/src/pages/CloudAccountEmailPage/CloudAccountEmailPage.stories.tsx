import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import CloudAccountEmailPage from './CloudAccountEmailPage';

type Args = ComponentProps<typeof CloudAccountEmailPage>;

export default {
  title: 'pages/CloudAccountEmailPage',
  component: CloudAccountEmailPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    currentStep: 1,
    stepCount: 1,
  },
} as Meta<Args>;

export const _CloudAccountEmailPage: Story<Args> = (args) => (
  <CloudAccountEmailPage {...args} />
);
_CloudAccountEmailPage.storyName = 'CloudAccountEmailPage';
