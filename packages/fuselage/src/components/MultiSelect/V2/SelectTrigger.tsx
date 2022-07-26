import React, { forwardRef } from 'react';

import Box from '../../Box';

export const SelectTrigger = forwardRef(
  (
    props: {
      children: React.ReactNode;
    },
    ref
  ) => (
    <Box
      bg='inherit'
      display='flex'
      flexGrow={1}
      ref={ref}
      is='button'
      {...props}
    />
  )
);
