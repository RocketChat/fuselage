import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { useRef } from 'react';

import Box from '../Box';
import { IconButton } from '../Button';
import Option from '../Option';

import { Dropdown } from './Dropdown';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

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
Default.parameters = {
  loki: {
    skip: true,
  },
};
