import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';

import { Icon } from '../Icon';

import { NumberInput } from './NumberInput';

const meta = {
  title: 'Inputs/NumberInput',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    'aria-label': 'number',
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': 'number',
    'placeholder': 'Enter number',
  },
};

export const WithValue: Story = {
  args: {
    'aria-label': 'number',
    'defaultValue': 1024,
  },
};

export const WithAddon: Story = {
  args: {
    'aria-label': 'number',
    'addon': <Icon name='send' size='x20' />,
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'number',
    'size': 'small',
  },
};

export const WithError: Story = {
  args: {
    'aria-label': 'number',
    'error': 'Error',
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'number',
    'disabled': true,
  },
};

export const States: Story = {
  render: () => (
    <YStack space='$4' padding='$4'>
      <NumberInput aria-label='number' placeholder='Default' />
      <NumberInput
        aria-label='number'
        placeholder='With addon'
        addon={<Icon name='send' size='x20' />}
      />
      <NumberInput aria-label='number' placeholder='Small' size='small' />
      <NumberInput aria-label='number' placeholder='Disabled' disabled />
      <NumberInput aria-label='number' placeholder='With error' error='Error' />
      <NumberInput
        aria-label='number'
        placeholder='With error and addon'
        error='Error'
        addon={<Icon name='send' size='x20' />}
      />
    </YStack>
  ),
};