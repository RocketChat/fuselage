import React, { useState } from 'react';

import { Box } from '..';
import {
  Fallback,
  FallbackDescription,
  FallbackIcon,
  FallbackTitle,
} from './Fallback';

export default {
  title: 'Fallback/Fallback',
  //   component: Message,
  //   parameters: {
  //     jest: ['Message.spec.tsx'],
  //   },
};

export const Default = () => {
  const [searchTerm] = useState('search term here');
  return (
    <Box>
      <Fallback>
        <FallbackIcon name='magnifier' />
        <FallbackTitle />
        <FallbackDescription searchTerm={searchTerm} />
      </Fallback>
    </Box>
  );
};
