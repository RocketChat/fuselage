import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { YStack, XStack, Input } from 'tamagui';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'INPUTS/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(nameToCharacterMapping),
      description: 'Name of the icon',
    },
    size: {
      control: 'select',
      options: ['x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36', 'x40'],
      description: 'Size of the icon',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const iconsList = Object.keys(nameToCharacterMapping).sort((a, b) =>
  a.localeCompare(b),
) as Keys[];

export const Default: Story = {
  args: {
    name: 'chat',
    size: 'x24',
  },
};

export const Sizes: Story = {
  render: () => (
    <XStack space='$4' alignItems='center'>
      <IconButton name='chat' size='x12' />
      <IconButton name='chat' size='x16' />
      <IconButton name='chat' size='x20' />
      <IconButton name='chat' size='x24' />
      <IconButton name='chat' size='x28' />
      <IconButton name='chat' size='x32' />
      <IconButton name='chat' size='x36' />
      <IconButton name='chat' size='x40' />
    </XStack>
  ),
};

export const AvailableIcons = () => {
  const [filter, setFilter] = useState('');

  const filteredIcons = iconsList.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <YStack space='$4' padding='$4'>
      <XStack maxWidth={200}>
        <Input
          size='$4'
          value={filter}
          onChange={(e) => setFilter(e.nativeEvent.text)}
          placeholder='Search icons'
          before={<IconButton name='magnifier' size='x20' />}
        />
      </XStack>
      <XStack flexWrap='wrap' alignContent='flex-start' padding='$4' gap='$4'>
        {filteredIcons.map((name) => (
          <YStack
            key={name}
            alignItems='center'
            justifyContent='center'
            width={100}
            height={100}
            borderWidth={1}
            borderColor='$borderColor'
            borderRadius='$4'
            padding='$2'
          >
            <IconButton name={name} size='x24' />
            <YStack height='$1' />
            <YStack fontSize='$1' textAlign='center'>
              {name}
            </YStack>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
};
