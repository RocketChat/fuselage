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
import type { ReactElement } from 'react';
import React, { useState } from 'react';

import { AutoComplete, Box, Option, Chip, Avatar } from '../..';

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
  { value: '1', label: { name: 'test1', bla: 'dasdad' } },
  { value: '2', label: { name: 'test2', bla: 'dasdad' } },
  { value: '3', label: { name: 'test3', bla: 'dasdad' } },
  { value: '4', label: { name: 'test4', bla: 'dasdad' } },
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
      options={options as any}
      onChange={handleChangeRooms}
      renderItem={({ value, label, ...props }): ReactElement => (
        <Option key={value} {...props} label={label.name} />
      )}
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
      value={value as any}
      filter={filter}
      setFilter={setFilter}
      options={options as any}
      onChange={handleChangeRooms}
      renderSelected={({ selected: { label } }) => (
        <>
          <Avatar
            size='x20'
            url='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          />{' '}
          {label.name}
        </>
      )}
      renderItem={({ value, label, ...props }): ReactElement => (
        <Option key={value} {...props} label={label.name} />
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
      renderItem={({ value, label, ...props }): ReactElement => (
        <Option key={value} {...props} label={label.name} />
      )}
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
      renderSelected={({ selected: { value, label }, onClick }) => (
        <Chip key={value} height='x20' value={value} onClick={onClick} mie='x4'>
          <Box is='span' margin='none' mis='x4'>
            <Avatar
              size='x20'
              url='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            />
            {'  '}
            {label.name}
          </Box>
        </Chip>
      )}
      renderItem={({ value, label, ...props }): ReactElement => (
        <Option key={value} {...props} label={label.name} />
      )}
    />
  );
};
