import React, { useRef } from 'react';

import { ActionButton, Box } from '..';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
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
      <Dropdown reference={anchor}>hello</Dropdown>
    </Box>
  );
};
