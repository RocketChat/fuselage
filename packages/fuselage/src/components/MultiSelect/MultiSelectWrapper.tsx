import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';

type MultiSelectWrapperProps = {
  children: ReactNode;
};

const MultiSelectWrapper = ({ children }: MultiSelectWrapperProps) => (
  <Box display='flex' flexGrow={1} marginInline={4}>
    <Box display='flex' alignItems='center' flexWrap='wrap' margin={-8}>
      {children}
    </Box>
  </Box>
);

export default MultiSelectWrapper;
