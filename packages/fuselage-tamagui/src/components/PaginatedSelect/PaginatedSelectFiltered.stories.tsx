import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaginatedSelectFiltered } from './PaginatedSelectFiltered';

const meta = {
  title: 'INPUTS/PaginatedSelectFiltered',
  component: PaginatedSelectFiltered,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginatedSelectFiltered>;

export default meta;
type Story = StoryObj<typeof PaginatedSelectFiltered>;

const options = Array.from({ length: 1000 }, (_, i) => ({
  value: i,
  label: `Item #${i}`,
}));

const Template: Story = {
  render: ({ value: defaultValue, ...args }) => {
    const [value, setValue] = useState<string | number | undefined>(defaultValue);
    const [filter, setFilter] = useState('');
    return (
      <PaginatedSelectFiltered
        {...args}
        value={value}
        onChange={setValue}
        filter={filter}
        setFilter={setFilter}
        options={options}
      />
    );
  },
};

export const Normal: Story = {
  ...Template,
  args: {
    placeholder: 'Placeholder here...',
  },
};

export const Errored: Story = {
  ...Template,
  args: {
    placeholder: 'Placeholder here...',
    error: 'Error',
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    placeholder: 'Placeholder here...',
    disabled: true,
  },
};