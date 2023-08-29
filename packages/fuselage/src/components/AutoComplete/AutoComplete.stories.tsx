import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import { AutoComplete, Box, Chip, Avatar, Option } from '../..';
import { exampleAvatar } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/AutoComplete',
  component: AutoComplete,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories title={''} />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof AutoComplete>;

const options = [
  { value: '1', label: 'test1' },
  { value: '2', label: 'test2' },
  { value: '3', label: 'test3' },
  { value: '4', label: 'test4' },
];

export const AutoCompleteDefault = () => {
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | string[]>('');

  const handleChangeRooms = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <AutoComplete
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleChangeRooms}
    />
  );
};

export const AutoCompleteCustomSelected = () => {
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | string[]>('1');

  const handleChangeRooms = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <AutoComplete
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleChangeRooms}
      renderSelected={({ selected: { label } }) => (
        <Box>
          <Avatar size='x20' url={exampleAvatar} /> {label}
        </Box>
      )}
    />
  );
};

export const AutoCompleteMultiple = () => {
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | string[]>(['1', '3']);

  const handleChangeRooms = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <AutoComplete
      multiple
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleChangeRooms}
    />
  );
};
export const AutoCompleteMultipleCustomSelected = () => {
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState<string | string[]>(['1', '3']);

  const handleChangeRooms = (value: string | string[]) => {
    setValue(value);
  };

  return (
    <AutoComplete
      multiple
      value={value}
      filter={filter}
      setFilter={setFilter}
      options={options}
      onChange={handleChangeRooms}
      renderSelected={({ selected: { value, label }, onRemove }) => (
        <Chip key={value} height='x20' value={value} onClick={onRemove} mie={4}>
          <Box is='span' margin='none' mis={4}>
            <Avatar size='x20' url={exampleAvatar} />
            {'  '}
            {label}
          </Box>
        </Chip>
      )}
      renderItem={({ value, label, ...props }) => (
        <Option {...props} key={value} label={label} />
      )}
    />
  );
};
