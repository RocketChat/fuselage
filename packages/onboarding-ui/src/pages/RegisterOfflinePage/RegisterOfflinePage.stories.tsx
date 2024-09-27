import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import RegisterOfflinePage from './RegisterOfflinePage';

export default {
  title: 'pages/RegisterOfflinePage',
  component: RegisterOfflinePage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  args: {
    onSubmit: action('onSubmit'),
    onBackButtonClick: action('onBackButtonClick'),
  },
} satisfies Meta<typeof RegisterOfflinePage>;

export const _RegisterOfflinePage: StoryFn<typeof RegisterOfflinePage> = (
  args
) => <RegisterOfflinePage {...args} />;
