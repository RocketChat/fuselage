import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Box } from '../Box';

import Badge from './Badge';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge content, typically a short label or count.',
      table: { category: 'Content' },
    },
    title: {
      control: 'text',
      description: 'Native `title` attribute shown as a tooltip on hover.',
      table: { category: 'Content' },
    },
    variant: {
      control: 'select',
      options: ['secondary', 'primary', 'danger', 'warning', 'ghost'],
      description: 'Color kind of the badge.',
      table: { category: 'Kind', defaultValue: { summary: 'secondary' } },
    },
    small: {
      control: 'boolean',
      description: 'Renders the badge in a smaller size.',
      table: { category: 'Size' },
    },
    disabled: {
      control: 'boolean',
      description: 'Applies the disabled visual style.',
      table: { category: 'State' },
    },
    is: {
      control: false,
      description: 'Underlying element or component rendered.',
      table: { category: 'Polymorphism', defaultValue: { summary: 'span' } },
    },
  },
  render: (args) => (
    <Box display='inline-flex'>
      <Badge {...args} />
    </Box>
  ),
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    children: '99',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: '',
    variant: 'primary',
    small: true,
  },
};
