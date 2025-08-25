import type { Meta, StoryObj } from '@storybook/react';
import { YStack, XStack, Text } from 'tamagui';

import { SelectInput } from './SelectInput';
import { SelectInputOption } from './SelectInputOption';
import { Icon } from '../Icon';

const meta = {
  title: 'INPUTS/SelectInput',
  component: SelectInput,
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
    multiple: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof SelectInput>;

const Template: Story = {
  render: (args) => (
    <SelectInput aria-label='select' {...args}>
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const Default: Story = Template;

export const Multiple: Story = {
  render: (args) => (
    <SelectInput 
      aria-label='select' 
      multiple 
      htmlSize={3}
      value={['b', 'c']}
      {...args}
    >
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const WithAddon: Story = {
  render: (args) => (
    <SelectInput 
      aria-label='select' 
      addon={<Icon name='discover' size={20} />}
      {...args}
    >
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const MultipleWithAddon: Story = {
  render: (args) => (
    <SelectInput 
      aria-label='select' 
      addon={<Icon name='discover' size={20} />}
      multiple 
      htmlSize={3}
      {...args}
    >
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <SelectInput aria-label='select' error='Error' {...args}>
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <SelectInput aria-label='select' disabled {...args}>
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const WithPlaceholder: Story = {
  render: (args) => (
    <SelectInput aria-label='select' placeholder='Placeholder' {...args}>
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const WithValue: Story = {
  render: (args) => (
    <SelectInput aria-label='select' defaultValue='b' {...args}>
      <SelectInputOption value='a'>Item A</SelectInputOption>
      <SelectInputOption value='b'>Item B</SelectInputOption>
      <SelectInputOption value='c'>Item C</SelectInputOption>
    </SelectInput>
  ),
};

export const States: Story = {
  render: () => (
    <YStack space={10} alignItems="center">
      <XStack space={10} alignItems="center">
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">default</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with placeholder</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">with value</Text>
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">multiple</Text>
      </XStack>
      
      <YStack space={10}>
        {/* Default row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">default</Text>
          <SelectInput aria-label='Default select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput placeholder="Placeholder" aria-label='Select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput value="b" aria-label='Select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput multiple size={3} aria-label='Multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <SelectInput aria-label='Hover select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput placeholder="Placeholder" aria-label='Hover select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput value="b" aria-label='Hover select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput multiple size={3} aria-label='Hover multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <SelectInput aria-label='Active select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput placeholder="Placeholder" aria-label='Active select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput value="b" aria-label='Active select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput multiple size={3} aria-label='Active multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <SelectInput aria-label='Focus select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput placeholder="Placeholder" aria-label='Focus select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput value="b" aria-label='Focus select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput multiple size={3} aria-label='Focus multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <SelectInput disabled aria-label='Disabled select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput disabled placeholder="Placeholder" aria-label='Disabled select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput disabled value="b" aria-label='Disabled select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput disabled multiple size={3} aria-label='Disabled multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <SelectInput error="Error" aria-label='Error select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput error="Error" placeholder="Placeholder" aria-label='Error select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput error="Error" value="b" aria-label='Error select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput error="Error" multiple size={3} aria-label='Error multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
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
        <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="center">multiple</Text>
      </XStack>
      
      <YStack space={10}>
        {/* Default row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">small</Text>
          <SelectInput small aria-label='Small select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small placeholder="Placeholder" aria-label='Small select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small value="b" aria-label='Small select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small multiple size={3} aria-label='Small multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Hover row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">hover</Text>
          <SelectInput small aria-label='Small hover select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small placeholder="Placeholder" aria-label='Small hover select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small value="b" aria-label='Small hover select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small multiple size={3} aria-label='Small hover multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Active row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">active</Text>
          <SelectInput small aria-label='Small active select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small placeholder="Placeholder" aria-label='Small active select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small value="b" aria-label='Small active select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small multiple size={3} aria-label='Small active multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Focus row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">focus</Text>
          <SelectInput small aria-label='Small focus select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small placeholder="Placeholder" aria-label='Small focus select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small value="b" aria-label='Small focus select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small multiple size={3} aria-label='Small focus multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Disabled row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">disabled</Text>
          <SelectInput small disabled aria-label='Small disabled select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small disabled placeholder="Placeholder" aria-label='Small disabled select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small disabled value="b" aria-label='Small disabled select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small disabled multiple size={3} aria-label='Small disabled multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
        
        {/* Error row */}
        <XStack space={10} alignItems="center">
          <Text width={120} fontSize="$2" color="#9EA2A8" textAlign="left">error</Text>
          <SelectInput small error="Error" aria-label='Small error select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small error="Error" placeholder="Placeholder" aria-label='Small error select with placeholder'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small error="Error" value="b" aria-label='Small error select with value'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
          <SelectInput small error="Error" multiple size={3} aria-label='Small error multiple select'>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </SelectInput>
        </XStack>
      </YStack>
    </YStack>
  ),
};

