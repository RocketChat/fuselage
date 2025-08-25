import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { RadioButton } from './RadioButton';

const meta = {
  title: 'INPUTS/RadioButton',
  component: RadioButton,
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
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    'aria-label': 'Default radio button',
  },
};

export const Checked: Story = {
  args: {
    'aria-label': 'Checked radio button',
    'checked': true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled radio button',
    'disabled': true,
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Disabled checked radio button',
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
          <RadioButton checked aria-label='Default checked radio button' />
          <RadioButton aria-label='Default unchecked radio button' />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <RadioButton checked aria-label='Hover checked radio button' />
          <RadioButton aria-label='Hover unchecked radio button' />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <RadioButton checked aria-label='Active checked radio button' />
          <RadioButton aria-label='Active unchecked radio button' />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <RadioButton checked aria-label='Focus checked radio button' />
          <RadioButton aria-label='Focus unchecked radio button' />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={100} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <RadioButton disabled checked aria-label='Disabled checked radio button' />
          <RadioButton disabled aria-label='Disabled unchecked radio button' />
        </XStack>
      </YStack>
    </YStack>
  ),
};
