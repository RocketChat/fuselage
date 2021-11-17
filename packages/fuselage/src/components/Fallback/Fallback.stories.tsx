import React from 'react';

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

export const Default = ({ searchTerm = 'search term here' }) => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle />
      <FallbackDescription searchTerm={searchTerm} />
    </Fallback>
  </Box>
);
