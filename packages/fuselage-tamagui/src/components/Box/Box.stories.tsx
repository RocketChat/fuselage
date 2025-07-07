import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'
import { Theme } from 'tamagui'

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    componentSubtitle: 'A primitive box component with normalized styles',
    docs: {
      description: {
        component: 'A primitive component that serves as the base for other components.'
      },
      status: 'stable',
      date: '2025-07-03 12:37:51',
      author: 'Muskan0400'
    }
  },
  tags: ['autodocs'],
  decorators: [(Story) => (
    <Theme name="light">
      <Story />
    </Theme>
  )],
  argTypes: {
    elevation: {
      description: 'Sets the elevation level of the box',
      options: ['0', '1', '2'],
      control: { type: 'radio' }
    },
    invisible: {
      description: 'Makes the box invisible while preserving its space',
      control: { type: 'boolean' }
    },
    is: {
      description: 'Renders the box as a different HTML element',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof Box>

// Basic example
export const Basic: Story = {
  args: {
    children: 'Basic Box',
    padding: '$4'
  }
}

// Elevation examples
export const Elevation0: Story = {
  args: {
    children: 'No Elevation',
    elevation: '0',
    padding: '$4'
  }
}

export const Elevation1: Story = {
  args: {
    children: 'Medium Elevation',
    elevation: '1',
    padding: '$4'
  }
}

export const Elevation2: Story = {
  args: {
    children: 'High Elevation',
    elevation: '2',
    padding: '$4'
  }
}

// Element type examples
export const AsButton: Story = {
  args: {
    is: 'button',
    children: 'Button Box',
    padding: '$4'
  }
}

export const AsSpan: Story = {
  args: {
    is: 'span',
    children: 'Span Box',
    padding: '$4'
  }
}

// Visibility example
export const Invisible: Story = {
  args: {
    invisible: true,
    children: 'Invisible Box',
    padding: '$4'
  }
}

// Rich content examples
export const WithBlockContent: Story = {
  args: {
    children: <div>Block content inside box</div>,
    padding: '$4'
  }
}

export const WithInlineContent: Story = {
  args: {
    children: <span>Inline content inside box</span>,
    padding: '$4'
  }
}