import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from './MultiSelect';

const meta = {
  title: 'INPUTS/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  ['1', 'Option 1'],
  ['2', 'Option 2'],
  ['3', 'Option 3'],
  ['4', 'Option 4'],
  ['5', 'Option 5'],
];

const Template: Story = {
  render: ({ value: defaultValue, ...args }) => {
    const [value, setValue] = useState<string[]>(defaultValue || []);
    return (
      <MultiSelect
        {...args}
        value={value}
        onChange={setValue}
        options={options}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    placeholder: 'Select options...',
  },
};

export const WithValue: Story = {
  ...Template,
  args: {
    placeholder: 'Select options...',
    value: ['1', '3'],
  },
};

export const WithError: Story = {
  ...Template,
  args: {
    placeholder: 'Select options...',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    placeholder: 'Select options...',
    disabled: true,
    value: ['1', '2'],
  },
};