import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import LoaderPage from './LoaderPage';

const subtitles = [
  'Bringing rocket to launch position1  🚀',
  'Loading rocket propellant  🚀',
  'Performing final go/no go poll with flight crew  🚀',
  'All systems nominal, switching to internal computer  🚀',
  'Beginning countdown, 5...4...3...2...1  🚀',
  'Transitioning to liftoff  🚀',
];

type Args = ComponentProps<typeof LoaderPage>;

export default {
  title: 'pages/LoaderPage',
  component: LoaderPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    title: 'Launching Kapai...',
    subtitles,
    isReady: false,
    loadingSeconds: 15,
  },
} as Meta<Args>;

export const _LoaderPage: Story<Args> = (args) => <LoaderPage {...args} />;
_LoaderPage.storyName = 'LoaderPage';
