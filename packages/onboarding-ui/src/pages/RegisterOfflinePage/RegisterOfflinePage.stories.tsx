import { action } from '@storybook/addon-actions';
import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import RegisterOfflinePage from './RegisterOfflinePage';

type Args = ComponentProps<typeof RegisterOfflinePage>;

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
} as Meta<Args>;

export const _RegisterOfflinePage: Story<Args> = (args) => (
  <RegisterOfflinePage {...args} />
);
