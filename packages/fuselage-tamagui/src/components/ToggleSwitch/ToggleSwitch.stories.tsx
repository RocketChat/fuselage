import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';
import { useState } from 'react';

import { ToggleSwitch } from './ToggleSwitch';

const meta = {
  title: 'INPUTS/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    'aria-label': 'Toggle switch',
  },
};

export const Checked: Story = {
  args: {
    'aria-label': 'Checked toggle switch',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled toggle switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Disabled checked toggle switch',
    checked: true,
    disabled: true,
  },
};

export const States: Story = {
  render: () => {
    const [states, setStates] = useState({
      defaultChecked: true,
      defaultUnchecked: false,
      hoverChecked: true,
      hoverUnchecked: false,
      activeChecked: true,
      activeUnchecked: false,
      focusChecked: true,
      focusUnchecked: false,
    });

    return (
      <YStack space={10} alignItems="center">
        {/* Header row with proper alignment */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left"></Text>
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">checked</Text>
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">unchecked</Text>
        </XStack>
        
        <YStack space={10}>
          {/* Default row */}
          <XStack space={10} alignItems="center">
            <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">default</Text>
            <ToggleSwitch 
              checked={states.defaultChecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, defaultChecked: checked }))}
              aria-label='Default checked toggle' 
            />
            <ToggleSwitch 
              checked={states.defaultUnchecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, defaultUnchecked: checked }))}
              aria-label='Default unchecked toggle' 
            />
          </XStack>
          
          {/* Hover row */}
          <XStack space={10} alignItems="center">
            <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
            <ToggleSwitch 
              checked={states.hoverChecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, hoverChecked: checked }))}
              aria-label='Hover checked toggle' 
            />
            <ToggleSwitch 
              checked={states.hoverUnchecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, hoverUnchecked: checked }))}
              aria-label='Hover unchecked toggle' 
            />
          </XStack>
          
          {/* Active row */}
          <XStack space={10} alignItems="center">
            <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
            <ToggleSwitch 
              checked={states.activeChecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, activeChecked: checked }))}
              aria-label='Active checked toggle' 
            />
            <ToggleSwitch 
              checked={states.activeUnchecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, activeUnchecked: checked }))}
              aria-label='Active unchecked toggle' 
            />
          </XStack>
          
          {/* Focus row */}
          <XStack space={10} alignItems="center">
            <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
            <ToggleSwitch 
              checked={states.focusChecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, focusChecked: checked }))}
              aria-label='Focus checked toggle' 
            />
            <ToggleSwitch 
              checked={states.focusUnchecked} 
              onChange={(checked) => setStates(prev => ({ ...prev, focusUnchecked: checked }))}
              aria-label='Focus unchecked toggle' 
            />
          </XStack>
          
          {/* Disabled row */}
          <XStack space={10} alignItems="center">
            <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
            <ToggleSwitch checked disabled aria-label='Disabled checked toggle' />
            <ToggleSwitch disabled aria-label='Disabled unchecked toggle' />
          </XStack>
        </YStack>
      </YStack>
    );
  },
};
