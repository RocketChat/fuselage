import type { Meta, StoryFn } from '@storybook/react-vite';

import ResetPasswordConfirmationPage from './ResetPasswordConfirmationPage.js';

export default {
  title: 'pages/ResetPasswordConfirmationPage',
  component: ResetPasswordConfirmationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ResetPasswordConfirmationPage>;

export const _ResetPasswordConfirmationPage: StoryFn<
  typeof ResetPasswordConfirmationPage
> = () => <ResetPasswordConfirmationPage />;
_ResetPasswordConfirmationPage.storyName = 'ResetPasswordConfirmationPage';
