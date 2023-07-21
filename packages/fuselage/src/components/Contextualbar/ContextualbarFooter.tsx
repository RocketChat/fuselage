import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import { Box } from '..';

const ContextualbarFooter = forwardRef<HTMLElement, ComponentProps<typeof Box>>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box is='footer' p='x24' {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);

export default memo(ContextualbarFooter);
