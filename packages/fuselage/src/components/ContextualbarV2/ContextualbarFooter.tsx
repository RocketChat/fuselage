import type { ComponentProps } from 'react';
import { forwardRef, memo } from 'react';

import { Box } from '..';

const ContextualbarFooter = forwardRef<HTMLElement, ComponentProps<typeof Box>>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box ref={ref} pi={16} pb={20} {...props}>
        {children}
      </Box>
    );
  }
);

export default memo(ContextualbarFooter);
