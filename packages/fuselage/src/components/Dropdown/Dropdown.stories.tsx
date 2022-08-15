import type { ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';

import { Box } from '..';
import { IconButton } from '../Button';
import Option from '../Option';
import { Dropdown } from './Dropdown';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    jest: ['Dropdown.spec.tsx'],
  },
};

export const Default: ComponentStory<typeof Dropdown> = () => {
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
      <IconButton secondary small ref={anchor} icon='doner' />
      <Dropdown ref={target} reference={anchor} placement='bottom-end'>
        {list.map((_, i) => (
          <Option key={i}>Example {i + 1}</Option>
        ))}
      </Dropdown>
    </Box>
  );
};
