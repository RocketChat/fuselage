import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { exampleAvatar, DECORATOR_LABEL } from '../../../.storybook/helpers';
import { Avatar } from '../Avatar';
import Box from '../Box';
import Chip from '../Chip';
import Option from '../Option';
import { AutoComplete } from './AutoComplete';

export default {
  title: 'Inputs/AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AutoComplete>;

const options = [
  { value: '1', label: 'test1' },
  { value: '2', label: 'test2' },
  { value: '3', label: 'test3' },
  { value: '4', label: 'test4' },
];

const Template: StoryFn<typeof AutoComplete> = ({
  value: defaultValue,
  ...args
}) => {
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | string[]>(defaultValue || []);

  const handleChangeRooms = (value: string | string[]) => setValue(value);

  return (
    <AutoComplete
      {...args}
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleChangeRooms}
      aria-label={DECORATOR_LABEL}
    />
  );
};

export const Default = Template.bind({});

export const CustomSelected = Template.bind({});
CustomSelected.args = {
  value: '1',
  renderSelected: ({ selected: { label } }) => (
    <Box>
      <Avatar size='x20' url={exampleAvatar} aria-hidden /> {label}
    </Box>
  ),
};

export const Multiple = Template.bind({});
Multiple.args = {
  value: ['1', '3'],
  multiple: true,
};

export const MultipleCustomSelected = Template.bind({});
MultipleCustomSelected.args = {
  value: ['1', '3'],
  multiple: true,
  renderSelected: ({ selected: { value, label }, onRemove }) => (
    <Chip key={value} height='x20' value={value} onClick={onRemove} mie={4}>
      <Box is='span' margin='none' mis={4}>
        <Avatar size='x20' url={exampleAvatar} aria-hidden />
        {'  '}
        {label}
      </Box>
    </Chip>
  ),
};

export const CustomItem = Template.bind({});
CustomItem.args = {
  renderItem: ({ value, label, ...props }) => (
    <Option
      {...props}
      key={value}
      label={label}
      avatar={<Avatar size='x20' url={exampleAvatar} aria-hidden />}
    />
  ),
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Search...',
};
