import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import { Box } from '..';

const ContextualbarSection = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(function ContextualbarSection(props, ref) {
  return (
    <Box
      ref={ref}
      rcx-vertical-bar__section
      p={16}
      display='flex'
      alignItems='center'
      flexGrow={1}
      borderBlockEndWidth='default'
      borderBlockColor='extra-light'
      {...props}
    />
  );
});

export default memo(ContextualbarSection);
