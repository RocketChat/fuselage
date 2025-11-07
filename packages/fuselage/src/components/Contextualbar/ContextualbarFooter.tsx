import type { ComponentProps } from 'react';
import { forwardRef, memo } from 'react';

import { Box } from '../index.js';

const ContextualbarFooter = forwardRef<HTMLElement, ComponentProps<typeof Box>>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box ref={ref} p={24} {...props}>
        {children}
      </Box>
    );
  },
);

export default memo(ContextualbarFooter);
