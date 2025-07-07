import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../Box'

const meta = {
  title: 'Layout/Box/Colors',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    date: '2025-07-03 12:40:14',
    author: 'Muskan0400'
  }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof Box>

export const SurfaceColors: Story = {
  args: {
    backgroundColor: '$surface',
    children: 'Surface Colors',
    padding: '$4'
  }
}

export const StatusColors: Story = {
  args: {
    backgroundColor: '$status',
    children: 'Status Colors',
    padding: '$4'
  }
}

export const StrokeColors: Story = {
  args: {
    borderColor: '$stroke',
    children: 'Stroke Colors',
    padding: '$4'
  }
}

export const FontColors: Story = {
  args: {
    color: '$font',
    children: 'Font Colors',
    padding: '$4'
  }
}