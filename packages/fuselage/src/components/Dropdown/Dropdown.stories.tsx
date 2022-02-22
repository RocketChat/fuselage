import React, { useRef } from 'react';

import { ActionButton, Box } from '..';
import Option from '../Options/Option/Option';
import { Dropdown } from './Dropdown';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    jest: ['Dropdown.spec.tsx'],
  },
};

export const Default = () => {
  const anchor = useRef(null);
  const target = useRef(null);

  const list = Array.from(new Array(20));

  return (
    <Box
      w='400px'
      h='500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <ActionButton ref={anchor} icon='doner' />
      <Dropdown ref={target} reference={anchor} placement='bottom-end'>
        {list.map((_, i) => (
          <Option key={i}>Example {i + 1}</Option>
        ))}
      </Dropdown>
    </Box>
  );
};
