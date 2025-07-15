import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaginatedMultiSelectFiltered } from './PaginatedMultiSelectFiltered';
import type { PaginatedMultiSelectOption } from './PaginatedMultiSelect';

const meta = {
  title: 'INPUTS/PaginatedMultiSelectFiltered',
  component: PaginatedMultiSelectFiltered,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginatedMultiSelectFiltered>;

export default meta;
type Story = StoryObj<typeof PaginatedMultiSelectFiltered>;

const options = Array.from({ length: 1000 }, (_, i) => ({
  value: i,
  label: `Item #${i}`,
}));

const Template: Story = {
  render: ({ value: defaultValue, ...args }) => {
    const [value, setValue] = useState<PaginatedMultiSelectOption[]>(defaultValue || []);
    const [filter, setFilter] = useState('');
    return (
      <PaginatedMultiSelectFiltered
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