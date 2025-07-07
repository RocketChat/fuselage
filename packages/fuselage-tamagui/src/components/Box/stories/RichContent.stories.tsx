import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../Box'

const meta = {
  title: 'Layout/Box/RichContent',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    date: '2025-07-03 12:40:14',
    author: 'Muskan0400'
  }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof Box>

export const Block: Story = {
  args: {
    children: <div>Block Content</div>,
    padding: '$4'
  }
}

export const Inline: Story = {
  args: {
    children: <span>Inline Content</span>,
    padding: '$4'
  }
}