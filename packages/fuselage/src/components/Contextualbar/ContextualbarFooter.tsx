import { forwardRef, memo } from 'react';

import { Box } from '..';
import type { BoxProps } from '../Box';

export type ContextualbarFooterProps = BoxProps;

const ContextualbarFooter = forwardRef<HTMLElement, ContextualbarFooterProps>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box ref={ref} p={24} {...props}>
        {children}
      </Box>
    );
  },
);

export default memo(ContextualbarFooter);
