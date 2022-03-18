import { action } from '@storybook/addon-actions';
import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import LaunchingWorkspacePage from './LaunchingWorkspacePage';

type Args = ComponentProps<typeof LaunchingWorkspacePage>;

export default {
  title: 'pages/LaunchingWorkspacePage',
  component: LaunchingWorkspacePage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    name: 'Kapai',
    isReady: true,
    loadingSeconds: 15,
    onRedirectToWorkspace: action('onRedirectToWorkspace'),
  },
} as Meta<Args>;

export const _LaunchingWorkspacePage: Story<Args> = (args) => (
  <LaunchingWorkspacePage {...args} />
);
_LaunchingWorkspacePage.storyName = 'LaunchingWorkspacePage';
