import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { TextAreaInput } from './TextAreaInput';
import { Icon } from '../Icon';

const meta = {
  title: 'INPUTS/TextAreaInput',
  component: TextAreaInput,
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
    rows: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextAreaInput>;

export default meta;
type Story = StoryObj<typeof TextAreaInput>;

const Template: Story = {
  render: (args) => (
    <TextAreaInput {...args} />
  ),
};

export const Default: Story = Template;

export const WithIconAddon: Story = {
  render: (args) => (
    <TextAreaInput 
      addon={<Icon name='send' size={20} />}
      {...args}
    />
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <TextAreaInput error='Error' {...args} />
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <TextAreaInput disabled {...args} />
  ),
};

export const WithPlaceholder: Story = {
  render: (args) => (
    <TextAreaInput placeholder='Placeholder' {...args} />
  ),
};

export const WithValue: Story = {
  render: (args) => (
    <TextAreaInput defaultValue='Roses are red\nViolets are blue' {...args} />
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
          <TextAreaInput aria-label='Default textarea' />
          <TextAreaInput placeholder="Placeholder" aria-label='Textarea with placeholder' />
          <TextAreaInput value="Value" aria-label='Textarea with value' />
          <TextAreaInput addon={<Icon name='edit' size={20} />} value="Value" aria-label='Textarea with icon' />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <TextAreaInput aria-label='Hover textarea' />
          <TextAreaInput placeholder="Placeholder" aria-label='Hover textarea with placeholder' />
          <TextAreaInput value="Value" aria-label='Hover textarea with value' />
          <TextAreaInput addon={<Icon name='edit' size={20} />} value="Value" aria-label='Hover textarea with icon' />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <TextAreaInput aria-label='Active textarea' />
          <TextAreaInput placeholder="Placeholder" aria-label='Active textarea with placeholder' />
          <TextAreaInput value="Value" aria-label='Active textarea with value' />
          <TextAreaInput addon={<Icon name='edit' size={20} />} value="Value" aria-label='Active textarea with icon' />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <TextAreaInput aria-label='Focus textarea' />
          <TextAreaInput placeholder="Placeholder" aria-label='Focus textarea with placeholder' />
          <TextAreaInput value="Value" aria-label='Focus textarea with value' />
          <TextAreaInput addon={<Icon name='edit' size={20} />} value="Value" aria-label='Focus textarea with icon' />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <TextAreaInput disabled aria-label='Disabled textarea' />
          <TextAreaInput disabled placeholder="Placeholder" aria-label='Disabled textarea with placeholder' />
          <TextAreaInput disabled value="Value" aria-label='Disabled textarea with value' />
          <TextAreaInput disabled addon={<Icon name='edit' size={20} />} value="Value" aria-label='Disabled textarea with icon' />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <TextAreaInput error="Error" aria-label='Error textarea' />
          <TextAreaInput error="Error" placeholder="Placeholder" aria-label='Error textarea with placeholder' />
          <TextAreaInput error="Error" value="Value" aria-label='Error textarea with value' />
          <TextAreaInput error="Error" addon={<Icon name='edit' size={20} />} value="Value" aria-label='Error textarea with icon' />
        </XStack>
        
        {/* Error + Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + hover</Text>
          <TextAreaInput error="Error" aria-label='Error hover textarea' />
          <TextAreaInput error="Error" placeholder="Placeholder" aria-label='Error hover textarea with placeholder' />
          <TextAreaInput error="Error" value="Value" aria-label='Error hover textarea with value' />
          <TextAreaInput error="Error" addon={<Icon name='edit' size={20} />} value="Value" aria-label='Error hover textarea with icon' />
        </XStack>
        
        {/* Error + Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + active</Text>
          <TextAreaInput error="Error" aria-label='Error active textarea' />
          <TextAreaInput error="Error" placeholder="Placeholder" aria-label='Error active textarea with placeholder' />
          <TextAreaInput error="Error" value="Value" aria-label='Error active textarea with value' />
          <TextAreaInput error="Error" addon={<Icon name='edit' size={20} />} value="Value" aria-label='Error active textarea with icon' />
        </XStack>
        
        {/* Error + Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error + focus</Text>
          <TextAreaInput error="Error" aria-label='Error focus textarea' />
          <TextAreaInput error="Error" placeholder="Placeholder" aria-label='Error focus textarea with placeholder' />
          <TextAreaInput error="Error" value="Value" aria-label='Error focus textarea with value' />
          <TextAreaInput error="Error" addon={<Icon name='edit' size={20} />} value="Value" aria-label='Error focus textarea with icon' />
        </XStack>
      </YStack>
    </YStack>
  ),
};
