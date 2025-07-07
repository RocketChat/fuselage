import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../Box'

const meta = {
  title: 'Layout/Box/Is',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    date: '2025-07-03 12:40:14',
    author: 'Muskan0400'
  }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof Box>

export const IsButton: Story = {
  args: {
    is: 'button',
    children: 'Button',
    padding: '$4'
  }
}

export const IsSpan: Story = {
  args: {
    is: 'span',
    children: 'Span',
    padding: '$4'
  }
}

export const IsH4: Story = {
  args: {
    is: 'h4',
    children: 'Heading 4',
    padding: '$4'
  }
}