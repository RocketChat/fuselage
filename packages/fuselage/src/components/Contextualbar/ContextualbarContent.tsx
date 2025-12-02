import { forwardRef, memo } from 'react';

import { Box } from '..';
import type { BoxProps } from '../Box';

const ContextualbarContent = forwardRef<HTMLElement, BoxProps>(
  function ContextualbarContent(props, ref) {
    return (
      <Box
        ref={ref}
        rcx-vertical-bar__content
        paddingInline={24}
        display='flex'
        flexDirection='column'
        overflowY='hidden'
        height='full'
        {...props}
      />
    );
  },
);

export default memo(ContextualbarContent);
