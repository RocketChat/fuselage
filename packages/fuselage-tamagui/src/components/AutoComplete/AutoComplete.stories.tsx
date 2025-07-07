import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { XStack, Avatar, Button, Text } from 'tamagui';

import { AutoComplete } from './AutoComplete';

const meta = {
  title: 'INPUTS/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'], // This is important for documentation generation
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      description: 'The selected value(s)',
      control: 'text',
      table: {
        type: { summary: 'string | string[]' },
      },
    },
    filter: {
      description: 'The current filter text',
      control: 'text',
    },
    setFilter: {
      description: 'Callback to update the filter value',
      table: {
        type: { summary: '(filter: string) => void' },
      },
    },
    options: {
      description: 'Array of options to select from',
      control: 'object',
    },
    multiple: {
      description: 'Allow multiple selections',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    error: {
      description: 'Show error state',
      control: 'boolean',
    },
    disabled: {
      description: 'Disable the input',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;

// Rest of your stories code remains the same...
type Story = StoryObj<typeof AutoComplete>;

const options = [
  { value: '1', label: 'test1' },
  { value: '2', label: 'test2' },
  { value: '3', label: 'test3' },
  { value: '4', label: 'test4' },
];

// Example Avatar URL
const exampleAvatar = 'https://via.placeholder.com/40';

const Template: Story = {
  render: ({ value: defaultValue, ...args }) => {
    const [filter, setFilter] = useState('');
    const [value, setValue] = useState<string | string[]>(defaultValue || []);

    return (
      <AutoComplete
        {...args}
        value={value}
        filter={filter}
        setFilter={setFilter}
        options={options}
        onChange={setValue}
      />
    );
  },
};

/**
 * Basic autocomplete with default styling
 */
export const Default: Story = {
  ...Template,
};

/**
 * Autocomplete with custom selected item rendering including an avatar
 */
export const CustomSelected: Story = {
  ...Template,
  args: {
    value: '1',
    renderSelected: ({ selected, onRemove }) => (
      <Button
        chromeless
        pressStyle={{ backgroundColor: '$background' }}
        onPress={onRemove}
      >
        <XStack padding='$2' space='$2' alignItems='center'>
          <Avatar circular size='$2' src={exampleAvatar} />
          <Text>{selected.label}</Text>
        </XStack>
      </Button>
    ),
  },
};

/**
 * Multiple selection support
 */
export const Multiple: Story = {
  ...Template,
  args: {
    value: ['1', '3'],
    multiple: true,
  },
};

/**
 * Multiple selection with custom item rendering
 */
export const MultipleCustomSelected: Story = {
  ...Template,
  args: {
    value: ['1', '3'],
    multiple: true,
    renderSelected: ({ selected, onRemove }) => (
      <Button
        size='$2'
        chromeless
        pressStyle={{ backgroundColor: '$background' }}
        onPress={onRemove}
      >
        <XStack space='$2' padding='$2' alignItems='center'>
          <Avatar circular size='$2' src={exampleAvatar} />
          <Text>{selected.label}</Text>
        </XStack>
      </Button>
    ),
  },
};

const Option = ({ value, label, onSelect, avatar }) => (
  <Button
    width='100%'
    chromeless
    pressStyle={{ backgroundColor: '$background' }}
    onPress={() => onSelect(value)}
  >
    <XStack padding='$2' space='$2' alignItems='center'>
      <Avatar circular size='$2' src={avatar} />
      <Text>{label}</Text>
    </XStack>
  </Button>
);

/**
 * Custom option rendering in the dropdown
 */
export const CustomItem: Story = {
  ...Template,
  args: {
    renderItem: (props) => <Option {...props} avatar={exampleAvatar} />,
  },
};

/**
 * Basic autocomplete with placeholder text
 */
export const WithPlaceholder: Story = {
  ...Template,
  args: {
    placeholder: 'Search...',
  },
};
