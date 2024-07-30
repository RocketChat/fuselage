import type { ForwardedRef } from 'react';
import React, { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarFooterProps = BoxProps;

const ContextualbarFooter = forwardRef(function ContextualbarFooter(
  { children, ...props }: ContextualbarFooterProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Box ref={ref} pi={16} pb={20} {...props}>
      {children}
    </Box>
  );
});

export default memo(ContextualbarFooter);
