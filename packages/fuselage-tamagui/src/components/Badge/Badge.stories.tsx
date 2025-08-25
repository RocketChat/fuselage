import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Stack } from 'tamagui';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    is: {
      description: 'Specify that a standard HTML element should behave like a defined custom built-in element',
      control: 'text',
    },
    variant: {
      description: 'Badge variant',
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'ghost'],
    },
    small: {
      description: 'Small badge size',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    className: {
      description: 'CSS class name',
      control: 'text',
    },
    title: {
      description: 'Title attribute',
      control: 'text',
    },
    children: {
      description: 'Badge content',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = (args: any) => (
  <Stack display="inline-flex">
    <Badge {...args} />
  </Stack>
);

export const Default: Story = {
  render: Template,
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: Template,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: Template,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: Template,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Template,
};

export const WithValue: Story = {
  args: {
    children: '99',
    variant: 'primary',
  },
  render: Template,
};

export const Small: Story = {
  args: {
    children: '',
    variant: 'primary',
    small: true,
  },
  render: Template,
};
