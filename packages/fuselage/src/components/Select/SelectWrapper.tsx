import type { ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectWrapperProps = {
  children: ReactNode;
};

const SelectWrapper = forwardRef(function SelectWrapper(
  { children }: SelectWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box display='flex' marginInline={-4} rcx-select__wrapper ref={ref}>
      {children}
    </Box>
  );
});

export default SelectWrapper;
