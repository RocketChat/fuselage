import type { ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type MultiSelectAddonProps = {
  children: ReactNode;
};

const MultiSelectAddon = forwardRef(function MultiSelectAddon(
  { children }: MultiSelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      rcx-multi-select__addon
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

export default MultiSelectAddon;
