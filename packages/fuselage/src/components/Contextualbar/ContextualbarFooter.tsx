import type { ForwardedRef } from 'react';
import { forwardRef, memo } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type ContextualbarFooterProps = BoxProps;

const ContextualbarFooter = forwardRef(function ContextualbarFooter(
  { children, ...props }: ContextualbarFooterProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Box ref={ref} p={24} {...props}>
      {children}
    </Box>
  );
});

export default memo(ContextualbarFooter);
