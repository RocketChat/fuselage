import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { TextInput } from './TextInput';
import { Icon } from '../Icon';

const meta = {
  title: 'INPUTS/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    small: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

const Template: Story = {
  render: (args) => (
    <TextInput aria-label='text' {...args} />
  ),
};

export const Default: Story = Template;

export const WithIconAddon: Story = {
  render: (args) => (
    <TextInput 
      aria-label='text'
      addon={<Icon name='send' size={20} />}
      {...args}
    />
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <TextInput aria-label='text' error='Error' {...args} />
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <TextInput aria-label='text' disabled {...args} />
  ),
};

export const WithPlaceholder: Story = {
  render: (args) => (
    <TextInput aria-label='text' placeholder='Placeholder' {...args} />
  ),
};

export const WithValue: Story = {
  render: (args) => (
    <TextInput aria-label='text' defaultValue='Value' {...args} />
  ),
};

export const States: Story = {
  render: () => (
    <YStack space={10} alignItems="center">
      <XStack space={10} alignItems="center">
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">default</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with placeholder</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with value</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with icon</Text>
      </XStack>
      
      <YStack space={10}>
        {/* Default row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">default</Text>
          <TextInput aria-label='Default text input' />
          <TextInput placeholder="Placeholder" aria-label='Text input with placeholder' />
          <TextInput value="Value" aria-label='Text input with value' />
          <TextInput addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Text input with icon' />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <TextInput aria-label='Hover text input' />
          <TextInput placeholder="Placeholder" aria-label='Hover text input with placeholder' />
          <TextInput value="Value" aria-label='Hover text input with value' />
          <TextInput addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Hover text input with icon' />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <TextInput aria-label='Active text input' />
          <TextInput placeholder="Placeholder" aria-label='Active text input with placeholder' />
          <TextInput value="Value" aria-label='Active text input with value' />
          <TextInput addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Active text input with icon' />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <TextInput aria-label='Focus text input' />
          <TextInput placeholder="Placeholder" aria-label='Focus text input with placeholder' />
          <TextInput value="Value" aria-label='Focus text input with value' />
          <TextInput addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Focus text input with icon' />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <TextInput disabled aria-label='Disabled text input' />
          <TextInput disabled placeholder="Placeholder" aria-label='Disabled text input with placeholder' />
          <TextInput disabled value="Value" aria-label='Disabled text input with value' />
          <TextInput disabled addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Disabled text input with icon' />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <TextInput error="Error" aria-label='Error text input' />
          <TextInput error="Error" placeholder="Placeholder" aria-label='Error text input with placeholder' />
          <TextInput error="Error" value="Value" aria-label='Error text input with value' />
          <TextInput error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Error text input with icon' />
        </XStack>
        
        {/* Error + Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + hover</Text>
          <TextInput error="Error" aria-label='Error hover text input' />
          <TextInput error="Error" placeholder="Placeholder" aria-label='Error hover text input with placeholder' />
          <TextInput error="Error" value="Value" aria-label='Error hover text input with value' />
          <TextInput error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Error hover text input with icon' />
        </XStack>
        
        {/* Error + Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + active</Text>
          <TextInput error="Error" aria-label='Error active text input' />
          <TextInput error="Error" placeholder="Placeholder" aria-label='Error active text input with placeholder' />
          <TextInput error="Error" value="Value" aria-label='Error active text input with value' />
          <TextInput error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Error active text input with icon' />
        </XStack>
        
        {/* Error + Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + focus</Text>
          <TextInput error="Error" aria-label='Error focus text input' />
          <TextInput error="Error" placeholder="Placeholder" aria-label='Error focus text input with placeholder' />
          <TextInput error="Error" value="Value" aria-label='Error focus text input with value' />
          <TextInput error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Error focus text input with icon' />
        </XStack>
      </YStack>
    </YStack>
  ),
};

export const SmallStates: Story = {
  render: () => (
    <YStack space={10} alignItems="center">
      <XStack space={10} alignItems="center">
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">small</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with placeholder</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with value</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with icon</Text>
      </XStack>
      
      <YStack space={10}>
        {/* Default row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">small</Text>
          <TextInput small aria-label='Small text input' />
          <TextInput small placeholder="Placeholder" aria-label='Small text input with placeholder' />
          <TextInput small value="Value" aria-label='Small text input with value' />
          <TextInput small addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small text input with icon' />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <TextInput small aria-label='Small hover text input' />
          <TextInput small placeholder="Placeholder" aria-label='Small hover text input with placeholder' />
          <TextInput small value="Value" aria-label='Small hover text input with value' />
          <TextInput small addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small hover text input with icon' />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <TextInput small aria-label='Small active text input' />
          <TextInput small placeholder="Placeholder" aria-label='Small active text input with placeholder' />
          <TextInput small value="Value" aria-label='Small active text input with value' />
          <TextInput small addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small active text input with icon' />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <TextInput small aria-label='Small focus text input' />
          <TextInput small placeholder="Placeholder" aria-label='Small focus text input with placeholder' />
          <TextInput small value="Value" aria-label='Small focus text input with value' />
          <TextInput small addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small focus text input with icon' />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <TextInput small disabled aria-label='Small disabled text input' />
          <TextInput small disabled placeholder="Placeholder" aria-label='Small disabled text input with placeholder' />
          <TextInput small disabled value="Value" aria-label='Small disabled text input with value' />
          <TextInput small disabled addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small disabled text input with icon' />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <TextInput small error="Error" aria-label='Small error text input' />
          <TextInput small error="Error" placeholder="Placeholder" aria-label='Small error text input with placeholder' />
          <TextInput small error="Error" value="Value" aria-label='Small error text input with value' />
          <TextInput small error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small error text input with icon' />
        </XStack>
        
        {/* Error + Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + hover</Text>
          <TextInput small error="Error" aria-label='Small error hover text input' />
          <TextInput small error="Error" placeholder="Placeholder" aria-label='Small error hover text input with placeholder' />
          <TextInput small error="Error" value="Value" aria-label='Small error hover text input with value' />
          <TextInput small error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small error hover text input with icon' />
        </XStack>
        
        {/* Error + Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + active</Text>
          <TextInput small error="Error" aria-label='Small error active text input' />
          <TextInput small error="Error" placeholder="Placeholder" aria-label='Small error active text input with placeholder' />
          <TextInput small error="Error" value="Value" aria-label='Small error active text input with value' />
          <TextInput small error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small error active text input with icon' />
        </XStack>
        
        {/* Error + Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + focus</Text>
          <TextInput small error="Error" aria-label='Small error focus text input' />
          <TextInput small error="Error" placeholder="Placeholder" aria-label='Small error focus text input with placeholder' />
          <TextInput small error="Error" value="Value" aria-label='Small error focus text input with value' />
          <TextInput small error="Error" addon={<Icon name='keyboard' size={20} />} value="Value" aria-label='Small error focus text input with icon' />
        </XStack>
      </YStack>
    </YStack>
  ),
};

