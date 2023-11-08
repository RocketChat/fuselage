import type { ReactNode } from 'react';
import React from 'react';

import Box from '../Box/Box';

const CardContent = ({
  children,
  // flexDirection,
  column = undefined,
  ...props
}: {
  children: ReactNode;
  // flexDirection?: CSSProperties['flexDirection'];
  column?: true | undefined;
}) => (
  <Box
    rcx-card__content
    display='flex'
    alignItems={column ? 'flex-start' : 'center'}
    // flexGrow={1}
    flexDirection={column ? 'column' : 'row'}
    fontScale='c1'
    {...props}
  >
    {children}
  </Box>
);

export default CardContent;
