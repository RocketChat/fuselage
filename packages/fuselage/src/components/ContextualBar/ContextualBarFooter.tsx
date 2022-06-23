import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import Box from '../Box';

const ContextualBarFooter = forwardRef<HTMLElement, ComponentProps<typeof Box>>(
  function ContextualBarFooter({ children, ...props }, ref) {
    return (
      <Box is='footer' p='x24' {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);

export default memo(ContextualBarFooter);
