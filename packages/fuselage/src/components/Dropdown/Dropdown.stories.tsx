import React, { useRef } from 'react';

import { ActionButton, Box } from '..';
import Option from '../Options/Option/Option';
import { Dropdown } from './Dropdown';

export default {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    jest: ['Dropdown.spec.tsx'],
  },
};

export const Default = () => {
  const anchor = useRef(null);
  return (
    <Box
      w='400px'
      h='500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <ActionButton ref={anchor} icon='doner' />
      <Dropdown reference={anchor} placement='bottom-end'>
        <Option>Example 1</Option>
        <Option>Example 2</Option>
        <Option>Example 3</Option>
      </Dropdown>
    </Box>
  );
};
