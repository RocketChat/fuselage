import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import Box from '../Box';

const ContextualBarContent = forwardRef<
  HTMLElement,
  ComponentProps<typeof Box>
>(function PageContent(props, ref) {
  return (
    <Box
      ref={ref}
      paddingInline='x24'
      display='flex'
      flexDirection='column'
      overflowY='hidden'
      height='full'
      // rcx-vertical-bar__content
      {...props}
    />
  );
});

export default memo(ContextualBarContent);
