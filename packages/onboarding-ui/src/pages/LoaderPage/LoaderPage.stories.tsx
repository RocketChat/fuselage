import type { StoryFn, Meta } from '@storybook/react';

import LoaderPage from './LoaderPage';

const subtitles = [
  'Bringing rocket to launch position1  🚀',
  'Loading rocket propellant  🚀',
  'Performing final go/no go poll with flight crew  🚀',
  'All systems nominal, switching to internal computer  🚀',
  'Beginning countdown, 5...4...3...2...1  🚀',
  'Transitioning to liftoff  🚀',
];

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
} satisfies Meta<typeof LoaderPage>;

export const _LoaderPage: StoryFn<typeof LoaderPage> = (args) => (
  <LoaderPage {...args} />
);
_LoaderPage.storyName = 'LoaderPage';
