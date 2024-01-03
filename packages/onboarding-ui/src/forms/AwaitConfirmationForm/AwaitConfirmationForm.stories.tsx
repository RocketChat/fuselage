import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import AwaitConfirmationForm from './AwaitConfirmationForm';

type Args = ComponentProps<typeof AwaitConfirmationForm>;

export default {
  title: 'forms/AwaitConfirmationForm',
  component: AwaitConfirmationForm,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    onResendEmailRequest: { action: 'resetEmailRequest' },
    onChangeEmailRequest: { action: 'changeEmailRequest' },
  },
  args: {
    currentStep: 4,
    stepCount: 4,
    securityCode: 'Funny Tortoise In The Hat',
    emailAddress: 'emailname@email.com',
  },
} as Meta<Args>;

export const _AwaitConfirmationForm: Story<Args> = (args) => (
  <AwaitConfirmationForm {...args} />
);
_AwaitConfirmationForm.storyName = 'AwaitConfirmationForm';
