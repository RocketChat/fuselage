import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select from './Select';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options in format [value, label]',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small size',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = Array.from({ length: 12 }).map((_, i) => [`${i + 1}`, `a test ${i + 1}`]);

export const Default: Story = {
  args: {
    options,
    placeholder: 'Placeholder here...',
    'aria-label': 'Select',
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: '3',
    'aria-label': 'Select with value',
  },
};

export const Error: Story = {
  args: {
    options,
    error: 'Error',
    'aria-label': 'Error select',
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    'aria-label': 'Disabled select',
  },
};

export const Small: Story = {
  args: {
    options,
    small: true,
    'aria-label': 'Small select',
  },
};

export const NoPlaceholder: Story = {
  args: {
    options,
    'aria-label': 'No placeholder select',
  },
};

export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [value, setValue] = useState<string>('3');
    
    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
        aria-label="Controlled select"
      />
    );
  },
  args: {
    options,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select options={options} aria-label="default" />
      <Select options={options} placeholder="Placeholder" aria-label="with placeholder" />
      <Select options={options} small aria-label="small" />
      <Select options={options} small placeholder="Placeholder" aria-label="small with placeholder" />
      <Select options={options} disabled aria-label="disabled" />
      <Select options={options} error="Error" aria-label="errored" />
    </div>
  ),
};
