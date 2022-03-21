import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';

type SelectWrapperProps = {
  children: ReactNode;
};

const SelectWrapper = ({ children }: SelectWrapperProps) => (
  <Box display='flex' flexGrow={1} marginInline={4}>
    <Box display='flex' alignItems='center' flexWrap='wrap' margin={-8}>
      {children}
    </Box>
  </Box>
);

export default SelectWrapper;
