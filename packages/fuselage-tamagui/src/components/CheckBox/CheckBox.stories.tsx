import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { YStack, XStack, Text } from 'tamagui';

import { CheckBox } from './CheckBox';

const meta = {
  title: 'INPUTS/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    'aria-label': 'Default checkbox',
  },
};

export const Checked: Story = {
  args: {
    'aria-label': 'Checked checkbox',
    'checked': true,
  },
};

export const Indeterminate: Story = {
  args: {
    'aria-label': 'Indeterminate checkbox',
    'indeterminate': true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled checkbox',
    'disabled': true,
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Disabled checked checkbox',
    'disabled': true,
    'checked': true,
  },
};

export const States: Story = {
  render: () => (
    <YStack space={10} alignItems="center">
      <XStack space={10} alignItems="center">
        <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="center">checked</Text>
        <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="center">unchecked</Text>
      </XStack>
      
      <YStack space={10}>
        {/* Default row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">default</Text>
          <CheckBox checked aria-label='Default checked checkbox' />
          <CheckBox aria-label='Default unchecked checkbox' />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <CheckBox checked aria-label='Hover checked checkbox' />
          <CheckBox aria-label='Hover unchecked checkbox' />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <CheckBox checked aria-label='Active checked checkbox' />
          <CheckBox aria-label='Active unchecked checkbox' />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <CheckBox checked aria-label='Focus checked checkbox' />
          <CheckBox aria-label='Focus unchecked checkbox' />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <CheckBox disabled checked aria-label='Disabled checked checkbox' />
          <CheckBox disabled aria-label='Disabled unchecked checkbox' />
        </XStack>
      </YStack>
    </YStack>
  ),
};
