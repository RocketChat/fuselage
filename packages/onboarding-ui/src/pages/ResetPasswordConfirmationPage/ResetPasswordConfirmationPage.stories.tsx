import type { Story } from '@storybook/react';

import ResetPasswordConfirmationPage from './ResetPasswordConfirmationPage';

export default {
  title: 'pages/ResetPasswordConfirmationPage',
  component: ResetPasswordConfirmationPage,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
};

export const _ResetPasswordConfirmationPage: Story = (args) => (
  <ResetPasswordConfirmationPage {...args} />
);
_ResetPasswordConfirmationPage.storyName = 'ResetPasswordConfirmationPage';
