import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { SearchInput } from './SearchInput';
import { Icon } from '../Icon';

const meta = {
  title: 'INPUTS/SearchInput',
  component: SearchInput,
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
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    'aria-label': 'Search',
  },
};

export const WithIconAddon: Story = {
  args: {
    'aria-label': 'Search with icon',
    addon: <Icon name='magnifier' size={20} />,
  },
};

export const Invalid: Story = {
  args: {
    'aria-label': 'Search with error',
    error: 'Error message',
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled search',
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': 'Search with placeholder',
    placeholder: 'Search for something...',
  },
};

export const WithValue: Story = {
  args: {
    'aria-label': 'Search with value',
    defaultValue: 'cat rooms',
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'Small search',
    small: true,
    placeholder: 'Small search...',
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
          <SearchInput aria-label='Default search' />
          <SearchInput placeholder="Placeholder" aria-label='Search with placeholder' />
          <SearchInput value="Value" aria-label='Search with value' />
          <SearchInput 
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Search with icon' 
          />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <SearchInput aria-label='Hover search' />
          <SearchInput placeholder="Placeholder" aria-label='Hover search with placeholder' />
          <SearchInput value="Value" aria-label='Hover search with value' />
          <SearchInput 
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Hover search with icon' 
          />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <SearchInput aria-label='Active search' />
          <SearchInput placeholder="Placeholder" aria-label='Active search with placeholder' />
          <SearchInput value="Value" aria-label='Active search with value' />
          <SearchInput 
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Active search with icon' 
          />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <SearchInput aria-label='Focus search' />
          <SearchInput placeholder="Placeholder" aria-label='Focus search with placeholder' />
          <SearchInput value="Value" aria-label='Focus search with value' />
          <SearchInput 
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Focus search with icon' 
          />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <SearchInput disabled aria-label='Disabled search' />
          <SearchInput disabled placeholder="Placeholder" aria-label='Disabled search with placeholder' />
          <SearchInput disabled value="Value" aria-label='Disabled search with value' />
          <SearchInput 
            disabled
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Disabled search with icon' 
          />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <SearchInput error="Error" aria-label='Error search' />
          <SearchInput error="Error" placeholder="Placeholder" aria-label='Error search with placeholder' />
          <SearchInput error="Error" value="Value" aria-label='Error search with value' />
          <SearchInput 
            error="Error"
            addon={<Icon name='magnifier' size={20} />} 
            value="Value" 
            aria-label='Error search with icon' 
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
          <SearchInput small aria-label='Small search' />
          <SearchInput small placeholder="Placeholder" aria-label='Small search with placeholder' />
          <SearchInput small value="Value" aria-label='Small search with value' />
          <SearchInput 
            small
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small search with icon' 
          />
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <SearchInput small aria-label='Small hover search' />
          <SearchInput small placeholder="Placeholder" aria-label='Small hover search with placeholder' />
          <SearchInput small value="Value" aria-label='Small hover search with value' />
          <SearchInput 
            small
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small hover search with icon' 
          />
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <SearchInput small aria-label='Small active search' />
          <SearchInput small placeholder="Placeholder" aria-label='Small active search with placeholder' />
          <SearchInput small value="Value" aria-label='Small active search with value' />
          <SearchInput 
            small
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small active search with icon' 
          />
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <SearchInput small aria-label='Small focus search' />
          <SearchInput small placeholder="Placeholder" aria-label='Small focus search with placeholder' />
          <SearchInput small value="Value" aria-label='Small focus search with value' />
          <SearchInput 
            small
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small focus search with icon' 
          />
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <SearchInput small disabled aria-label='Small disabled search' />
          <SearchInput small disabled placeholder="Placeholder" aria-label='Small disabled search with placeholder' />
          <SearchInput small disabled value="Value" aria-label='Small disabled search with value' />
          <SearchInput 
            small
            disabled
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small disabled search with icon' 
          />
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <SearchInput small error="Error" aria-label='Small error search' />
          <SearchInput small error="Error" placeholder="Placeholder" aria-label='Small error search with placeholder' />
          <SearchInput small error="Error" value="Value" aria-label='Small error search with value' />
          <SearchInput 
            small
            error="Error"
            addon={<Icon name='magnifier' size={16} />} 
            value="Value" 
            aria-label='Small error search with icon' 
          />
        </XStack>
      </YStack>
    </YStack>
  ),
};
