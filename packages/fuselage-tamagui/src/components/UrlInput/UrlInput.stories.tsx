import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { UrlInput } from './UrlInput';
import { Icon } from '../Icon';

const meta = {
  title: 'INPUTS/UrlInput',
  component: UrlInput,
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
} satisfies Meta<typeof UrlInput>;

export default meta;
type Story = StoryObj<typeof UrlInput>;

export const Default: Story = {
  args: {
    'aria-label': 'URL',
  },
};

export const WithIconAddon: Story = {
  args: {
    'aria-label': 'URL with icon',
    addon: <Icon name='discover' size={20} />,
  },
};

export const Invalid: Story = {
  args: {
    'aria-label': 'URL with error',
    error: 'Error message',
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled URL',
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': 'URL with placeholder',
    placeholder: 'Enter URL...',
  },
};

export const WithValue: Story = {
  args: {
    'aria-label': 'URL with value',
    defaultValue: 'https://rocket.chat',
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'Small URL',
    small: true,
    placeholder: 'Small URL...',
  },
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
          <UrlInput aria-label='Default URL' />
          <UrlInput placeholder="Placeholder" aria-label='URL with placeholder' />
          <UrlInput value="https://rocket.chat" aria-label='URL with value' />
          <UrlInput 
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='URL with icon' 
          />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <UrlInput aria-label='Hover URL' />
          <UrlInput placeholder="Placeholder" aria-label='Hover URL with placeholder' />
          <UrlInput value="https://rocket.chat" aria-label='Hover URL with value' />
          <UrlInput 
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='Hover URL with icon' 
          />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <UrlInput aria-label='Active URL' />
          <UrlInput placeholder="Placeholder" aria-label='Active URL with placeholder' />
          <UrlInput value="https://rocket.chat" aria-label='Active URL with value' />
          <UrlInput 
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='Active URL with icon' 
          />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <UrlInput aria-label='Focus URL' />
          <UrlInput placeholder="Placeholder" aria-label='Focus URL with placeholder' />
          <UrlInput value="https://rocket.chat" aria-label='Focus URL with value' />
          <UrlInput 
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='Focus URL with icon' 
          />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <UrlInput disabled aria-label='Disabled URL' />
          <UrlInput disabled placeholder="Placeholder" aria-label='Disabled URL with placeholder' />
          <UrlInput disabled value="https://rocket.chat" aria-label='Disabled URL with value' />
          <UrlInput 
            disabled
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='Disabled URL with icon' 
          />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <UrlInput error="Error" aria-label='Error URL' />
          <UrlInput error="Error" placeholder="Placeholder" aria-label='Error URL with placeholder' />
          <UrlInput error="Error" value="https://rocket.chat" aria-label='Error URL with value' />
          <UrlInput 
            error="Error"
            addon={<Icon name='discover' size={20} />} 
            value="https://rocket.chat" 
            aria-label='Error URL with icon' 
          />
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
          <UrlInput small aria-label='Small URL' />
          <UrlInput small placeholder="Placeholder" aria-label='Small URL with placeholder' />
          <UrlInput small value="https://rocket.chat" aria-label='Small URL with value' />
          <UrlInput 
            small
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small URL with icon' 
          />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <UrlInput small aria-label='Small hover URL' />
          <UrlInput small placeholder="Placeholder" aria-label='Small hover URL with placeholder' />
          <UrlInput small value="https://rocket.chat" aria-label='Small hover URL with value' />
          <UrlInput 
            small
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small hover URL with icon' 
          />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <UrlInput small aria-label='Small active URL' />
          <UrlInput small placeholder="Placeholder" aria-label='Small active URL with placeholder' />
          <UrlInput small value="https://rocket.chat" aria-label='Small active URL with value' />
          <UrlInput 
            small
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small active URL with icon' 
          />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <UrlInput small aria-label='Small focus URL' />
          <UrlInput small placeholder="Placeholder" aria-label='Small focus URL with placeholder' />
          <UrlInput small value="https://rocket.chat" aria-label='Small focus URL with value' />
          <UrlInput 
            small
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small focus URL with icon' 
          />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <UrlInput small disabled aria-label='Small disabled URL' />
          <UrlInput small disabled placeholder="Placeholder" aria-label='Small disabled URL with placeholder' />
          <UrlInput small disabled value="https://rocket.chat" aria-label='Small disabled URL with value' />
          <UrlInput 
            small
            disabled
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small disabled URL with icon' 
          />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <UrlInput small error="Error" aria-label='Small error URL' />
          <UrlInput small error="Error" placeholder="Placeholder" aria-label='Small error URL with placeholder' />
          <UrlInput small error="Error" value="https://rocket.chat" aria-label='Small error URL with value' />
          <UrlInput 
            small
            error="Error"
            addon={<Icon name='discover' size={16} />} 
            value="https://rocket.chat" 
            aria-label='Small error URL with icon' 
          />
        </XStack>
      </YStack>
    </YStack>
  ),
};
