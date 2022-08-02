import type { ComponentStory } from '@storybook/react';
import React, { useRef, useState } from 'react';

import { Box } from '..';
import { IconButton } from '../Button';
import Option from '../Options/Option/Option';
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

  const [isVisible, setIsVisible] = useState(false);

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
        onClick={() => setIsVisible(!isVisible)}
      />
      <Dropdown
        ref={target}
        reference={anchor}
        placement='bottom-end'
        visible={isVisible}
        onShow={() => setIsVisible(true)}
        onClose={() => setIsVisible(false)}
      >
        {list.map((_, i) => (
          <Option key={i}>Example {i + 1}</Option>
        ))}
      </Dropdown>
    </Box>
  );
};
