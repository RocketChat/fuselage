import { forwardRef, memo } from 'react';

import { Box } from '..';
import type { BoxProps } from '../Box';

const ContextualbarFooter = forwardRef<HTMLElement, BoxProps>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box ref={ref} pi={16} pb={20} {...props}>
        {children}
      </Box>
    );
  },
);

export default memo(ContextualbarFooter);
