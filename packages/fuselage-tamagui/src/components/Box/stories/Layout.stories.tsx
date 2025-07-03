import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';

const meta = {
  title: 'Layout/Box/Layout',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    date: '2025-07-03 12:40:14',
    author: 'Muskan0400',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Borders: Story = {
  args: {
    border: '$1',
    children: 'Borders',
    padding: '$4',
  },
};

export const BorderRadii: Story = {
  args: {
    borderRadius: '$1',
    children: 'Border Radii',
    padding: '$4',
  },
};

export const Display: Story = {
  args: {
    display: 'flex',
    children: 'Display',
    padding: '$4',
  },
};

export const Elevation: Story = {
  args: {
    elevation: '1',
    children: 'Elevation',
    padding: '$4',
  },
};

export const Heights: Story = {
  args: {
    height: 100,
    children: 'Heights',
    padding: '$4',
  },
};

export const Insets: Story = {
  args: {
    inset: '$4',
    children: 'Insets',
    padding: '$4',
  },
};

export const Invisible: Story = {
  args: {
    invisible: true,
    children: 'Invisible',
    padding: '$4',
  },
};

export const Margins: Story = {
  args: {
    margin: '$4',
    children: 'Margins',
  },
};

export const Opacity: Story = {
  args: {
    opacity: 0.5,
    children: 'Opacity',
    padding: '$4',
  },
};

export const Paddings: Story = {
  args: {
    padding: '$4',
    children: 'Paddings',
  },
};

export const Position: Story = {
  args: {
    position: 'relative',
    children: 'Position',
    padding: '$4',
  },
};

export const Widths: Story = {
  args: {
    width: 200,
    children: 'Widths',
    padding: '$4',
  },
};

export const Sizes: Story = {
  args: {
    size: '$4',
    children: 'Sizes',
    padding: '$4',
  },
};

export const TextAlign: Story = {
  args: {
    textAlign: 'center',
    children: 'Text Align',
    padding: '$4',
  },
};

export const VerticalAlign: Story = {
  args: {
    verticalAlign: 'middle',
    children: 'Vertical Align',
    padding: '$4',
  },
};

export const ZIndex: Story = {
  args: {
    zIndex: 1,
    children: 'Z Index',
    padding: '$4',
  },
};

export const Focusable: Story = {
  args: {
    focusable: true,
    children: 'Focusable',
    padding: '$4',
  },
};
