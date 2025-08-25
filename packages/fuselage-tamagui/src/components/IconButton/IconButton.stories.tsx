import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import React from 'react';
import { XStack, YStack, View, Text } from 'tamagui';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'tiny', 'mini'],
      description: 'Size of the icon button',
    },
    primary: {
      control: 'boolean',
      description: 'Primary variant',
    },
    secondary: {
      control: 'boolean',
      description: 'Secondary variant',
    },
    info: {
      control: 'boolean',
      description: 'Info variant',
    },
    success: {
      control: 'boolean',
      description: 'Success variant',
    },
    warning: {
      control: 'boolean',
      description: 'Warning variant',
    },
    danger: {
      control: 'boolean',
      description: 'Danger variant',
    },
    pressed: {
      control: 'boolean',
      description: 'Pressed state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { icon: 'chat', 'aria-label': 'chat' },
};

export const Disabled: Story = {
  args: { icon: 'chat', disabled: true, 'aria-label': 'disabled' },
};

export const Pressed: Story = {
  args: { icon: 'chat', pressed: true, 'aria-label': 'pressed' },
};

export const Sizes: Story = {
  render: () => (
    <XStack space="$2" alignItems="center">
      <IconButton icon="chat" size="large" aria-label="large" />
      <IconButton icon="chat" size="medium" aria-label="medium" />
      <IconButton icon="chat" size="small" aria-label="small" />
      <IconButton icon="chat" size="tiny" aria-label="tiny" />
      <IconButton icon="chat" size="mini" aria-label="mini" />
    </XStack>
  ),
};

export const WithEmoji: Story = {
  args: {
    icon: (
      <span role="img" aria-label="emoji" style={{ fontSize: 24 }}>
        🤘🏾
      </span>
    ),
    'aria-label': 'emoji',
  },
};

export const Variants: Story = {
  render: () => (
    <YStack space="$4">
      <XStack space="$2">
        <IconButton icon="chat" aria-label="default" />
        <IconButton icon="chat" secondary aria-label="secondary" />
      </XStack>
      <XStack space="$2">
        <IconButton icon="chat" info aria-label="info" />
        <IconButton icon="chat" secondary info aria-label="secondary info" />
      </XStack>
      <XStack space="$2">
        <IconButton icon="chat" success aria-label="success" />
        <IconButton icon="chat" secondary success aria-label="secondary success" />
      </XStack>
      <XStack space="$2">
        <IconButton icon="chat" warning aria-label="warning" />
        <IconButton icon="chat" secondary warning aria-label="secondary warning" />
      </XStack>
      <XStack space="$2">
        <IconButton icon="chat" danger aria-label="danger" />
        <IconButton icon="chat" secondary danger aria-label="secondary danger" />
      </XStack>
    </YStack>
  ),
};

export const Primary: Story = {
  args: {
    icon: "chat",
    primary: true,
    'aria-label': 'primary',
  },
};

export const Info: Story = {
  args: {
    icon: "chat",
    info: true,
    'aria-label': 'info',
  },
};

export const SecondaryInfo: Story = {
  args: {
    icon: "chat",
    secondary: true,
    info: true,
    'aria-label': 'secondary info',
  },
};

export const Success: Story = {
  args: {
    icon: "chat",
    success: true,
    'aria-label': 'success',
  },
};

export const SecondarySuccess: Story = {
  args: {
    icon: "chat",
    secondary: true,
    success: true,
    'aria-label': 'secondary success',
  },
};

export const Warning: Story = {
  args: {
    icon: "chat",
    warning: true,
    'aria-label': 'warning',
  },
};

export const SecondaryWarning: Story = {
  args: {
    icon: "chat",
    secondary: true,
    warning: true,
    'aria-label': 'secondary warning',
  },
};

export const Danger: Story = {
  args: {
    icon: "chat",
    danger: true,
    'aria-label': 'danger',
  },
};

export const SecondaryDanger: Story = {
  args: {
    icon: "chat",
    secondary: true,
    danger: true,
    'aria-label': 'secondary danger',
  },
};

export const WithBadge: Story = {
  render: () => (
    <IconButton 
      icon="chat" 
      position="relative" 
      overflow="visible" 
      aria-label="chat with badge"
    >
      <View
        position="absolute"
        backgroundColor="$red10"
        borderRadius={1000}
        minWidth={16}
        height={16}
        alignItems="center"
        justifyContent="center"
        top={0}
        right={0}
        transform="translate(30%, -30%)"
      >
        <Text color="white" fontSize={10}>2</Text>
      </View>
    </IconButton>
  ),
};