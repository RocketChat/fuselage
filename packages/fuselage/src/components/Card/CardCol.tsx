import { Box } from '@rocket.chat/fuselage';
import type { FC } from 'react';
import React from 'react';

const CardCol: FC = ({ children }) => (
  <Box
    rcx-card__col
    display='flex'
    // flexGrow={1}
    flexDirection='column'
    fontScale='c1'
  >
    {children}
  </Box>
);

export default CardCol;
