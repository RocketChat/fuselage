import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';

import { Icon } from '../Icon';

import { EmailInput } from './EmailInput';

const meta = {
  title: 'Inputs/EmailInput',
  component: EmailInput,
} satisfies Meta<typeof EmailInput>;

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  args: {
    'aria-label': 'email',
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': 'email',
    'placeholder': 'Placeholder',
  },
};

export const WithValue: Story = {
  args: {
    'aria-label': 'email',
    'defaultValue': 'support@rocket.chat',
  },
};

export const WithAddon: Story = {
  args: {
    'aria-label': 'email',
    'addon': <Icon name='mail' size='x20' />,
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'email',
    'size': 'small',
  },
};

export const WithError: Story = {
  args: {
    'aria-label': 'email',
    'error': 'Error',
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'email',
    'disabled': true,
  },
};

export const States: Story = {
  render: () => (
    <YStack space='$4' padding='$4'>
      <EmailInput aria-label='email' placeholder='Default' />
      <EmailInput
        aria-label='email'
        placeholder='With addon'
        addon={<Icon name='mail' size='x20' />}
      />
      <EmailInput aria-label='email' placeholder='Small' size='small' />
      <EmailInput aria-label='email' placeholder='Disabled' disabled />
      <EmailInput aria-label='email' placeholder='With error' error='Error' />
      <EmailInput
        aria-label='email'
        placeholder='With error and addon'
        error='Error'
        addon={<Icon name='mail' size='x20' />}
      />
    </YStack>
  ),
};
