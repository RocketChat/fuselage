import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import { Box } from '..';

const ContextualbarContent = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(function ContextualbarContent(props, ref) {
  return (
    <Box
      ref={ref}
      rcx-vertical-bar__content
      paddingInline={24}
      display='flex'
      flexDirection='column'
      overflowY='hidden'
      height='full'
      {...props}
    />
  );
});

export default memo(ContextualbarContent);
