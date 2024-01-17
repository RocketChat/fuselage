import type { StoryFn } from '@storybook/react';
import React, { useRef } from 'react';

import { Dropdown } from './Dropdown';
import { Box } from '..';
import { IconButton } from '../Button';
import Option from '../Option';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    jest: ['Dropdown.spec.tsx'],
  },
};

export const Default: StoryFn<typeof Dropdown> = () => {
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
      <IconButton
        secondary
        small
        ref={anchor}
        icon='doner'
        data-testid='dropdown-anchor'
      />
      <Dropdown ref={target} reference={anchor} placement='bottom-end'>
        {list.map((_, i) => (
          <Option key={i}>Example {i + 1}</Option>
        ))}
      </Dropdown>
    </Box>
  );
};
