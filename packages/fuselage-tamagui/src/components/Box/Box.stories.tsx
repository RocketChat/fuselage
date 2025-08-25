import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

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
  argTypes: {
    elevation: {
      description: 'Sets the elevation level of the box',
      options: ['0', '1', '2', '1nb', '2nb'],
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

export const Default: Story = {
  args: {
    children: 'Basic Box',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
  },
};

export const WithElevation: Story = {
  render: () => (
    <Box flexDirection="row" gap={16}>
      <Box elevation="0" padding={16} backgroundColor="#FFFFFF" borderWidth={1} borderColor="#E4E7EA" borderRadius={4}>
        Elevation 0
      </Box>
      <Box elevation="1" padding={16} backgroundColor="#FFFFFF" borderRadius={4}>
        Elevation 1
      </Box>
      <Box elevation="2" padding={16} backgroundColor="#FFFFFF" borderRadius={4}>
        Elevation 2
      </Box>
      <Box elevation="1nb" padding={16} backgroundColor="#FFFFFF" borderRadius={4}>
        Elevation 1 (No Border)
      </Box>
      <Box elevation="2nb" padding={16} backgroundColor="#FFFFFF" borderRadius={4}>
        Elevation 2 (No Border)
      </Box>
    </Box>
  ),
};

export const WithFontScale: Story = {
  render: () => (
    <Box flexDirection="column" gap={16}>
      <Box fontScale="hero">Hero Text</Box>
      <Box fontScale="h1">Heading 1</Box>
      <Box fontScale="h2">Heading 2</Box>
      <Box fontScale="h3">Heading 3</Box>
      <Box fontScale="h4">Heading 4</Box>
      <Box fontScale="p1">Paragraph 1</Box>
      <Box fontScale="p2">Paragraph 2</Box>
      <Box fontScale="c1">Caption 1</Box>
      <Box fontScale="c2">Caption 2</Box>
      <Box fontScale="micro">Micro Text</Box>
    </Box>
  ),
};

export const Layouts: Story = {
  render: () => (
    <Box flexDirection="column" gap={16}>
      <Box flexDirection="row" gap={16} backgroundColor="#F7F8FA" padding={16}>
        <Box flex={1} backgroundColor="#FFFFFF" padding={16} borderRadius={4}>Column 1</Box>
        <Box flex={1} backgroundColor="#FFFFFF" padding={16} borderRadius={4}>Column 2</Box>
        <Box flex={1} backgroundColor="#FFFFFF" padding={16} borderRadius={4}>Column 3</Box>
      </Box>
      <Box position="relative" height={100} backgroundColor="#F7F8FA" padding={16}>
        <Box position="absolute" top={0} right={0} padding={8} backgroundColor="#EC0D2A" color="#FFFFFF" borderRadius={4}>
          Absolute
        </Box>
        <Box>Normal content</Box>
      </Box>
    </Box>
  ),
};

export const WithTruncatedText: Story = {
  args: {
    withTruncatedText: true,
    children: 'This is a very long text that should be truncated with ellipsis when it overflows the container width',
    maxWidth: 200,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
  },
};

export const Invisible: Story = {
  args: {
    invisible: true,
    children: 'This box is invisible',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
  },
};

export const AsLink: Story = {
  args: {
    is: 'a',
    href: 'https://rocket.chat',
    target: '_blank',
    children: 'This box is a link',
    padding: 16,
    backgroundColor: '#FFFFFF',
    color: '#156FF5',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
  },
};

export const WithAnimation: Story = {
  args: {
    animated: true,
    children: 'This box has animation enabled',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
    pressStyle: {
      scale: 0.95,
    },
    hoverStyle: {
      scale: 1.05,
    },
  },
};

export const RichContent: Story = {
  args: {
    withRichContent: true,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EA',
    borderRadius: 4,
    children: (
      <>
        <Box fontScale="h2">Rich Content</Box>
        <Box fontScale="p1">This box contains rich content with multiple elements</Box>
        <Box fontScale="c1" color="#9EA2A8">With different styles</Box>
      </>
    ),
  },
};