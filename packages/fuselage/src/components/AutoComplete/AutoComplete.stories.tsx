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

import { AutoComplete, Box, Chip, Avatar } from '../..';
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
  { value: '1', label: { name: 'test1', someProp: 'dasdad' } },
  { value: '2', label: { name: 'test2', someProp: 'dasdad' } },
  { value: '3', label: { name: 'test3', someProp: 'dasdad' } },
  { value: '4', label: { name: 'test4', someProp: 'dasdad' } },
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
          <Avatar size='x20' url={exampleAvatar} /> {label.name}
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
        <Chip
          key={value}
          height='x20'
          value={value}
          onClick={onRemove}
          mie='x4'
        >
          <Box is='span' margin='none' mis='x4'>
            <Avatar size='x20' url={exampleAvatar} />
            {'  '}
            {label.name}
          </Box>
        </Chip>
      )}
    />
  );
};
