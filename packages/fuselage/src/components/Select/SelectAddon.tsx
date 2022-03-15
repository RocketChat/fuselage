import type { ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectAddonProps = {
  children: ReactNode;
};

const SelectAddon = forwardRef(function SelectAddon(
  { children }: SelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      rcx-select__addon
      marginInline={4}
      flexGrow={0}
      flexShrink={0}
      display='flex'
      flexDirection='row'
      flexWrap='nowrap'
      alignItems='flex-start'
    >
      {children}
    </Box>
  );
});

export default SelectAddon;
