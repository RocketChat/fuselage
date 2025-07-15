import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import React from 'react';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { icon: 'chat', 'aria-label': 'chat' },
};

export const Disabled: Story = {
  args: { icon: 'chat', disabled: true, 'aria-label': 'disabled' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton icon="chat" size="large" aria-label="large" />
      <IconButton icon="chat" size="medium" aria-label="medium" />
      <IconButton icon="chat" size="small" aria-label="small" />
      <IconButton icon="chat" size="tiny" aria-label="tiny" />
      <IconButton icon="chat" size="mini" aria-label="mini" />
    </div>
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