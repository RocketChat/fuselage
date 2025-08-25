import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';

const meta = {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    secondary: {
      control: 'boolean',
      description: 'Whether to use secondary styling',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    'aria-label': 'password',
  },
};

export const WithValue: Story = {
  args: {
    'aria-label': 'password',
    value: 'mypassword123',
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': 'password',
    placeholder: 'Enter your password',
  },
};

export const Invalid: Story = {
  args: {
    'aria-label': 'password',
    error: 'Password is required',
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'password',
    disabled: true,
    value: 'mypassword123',
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'password',
    small: true,
    placeholder: 'Enter password',
  },
};

export const WithValueSmall: Story = {
  args: {
    'aria-label': 'password',
    small: true,
    value: 'mypassword123',
  },
};
