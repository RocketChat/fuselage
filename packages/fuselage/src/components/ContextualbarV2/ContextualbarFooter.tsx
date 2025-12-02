import { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

export type ContextualbarFooterProps = BoxProps;

const ContextualbarFooter = forwardRef<HTMLElement, ContextualbarFooterProps>(
  function ContextualbarFooter({ children, ...props }, ref) {
    return (
      <Box ref={ref} pi={16} pb={20} {...props}>
        {children}
      </Box>
    );
  },
);

export default memo(ContextualbarFooter);
