import { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

export type ContextualbarContentProps = BoxProps;

const ContextualbarContent = forwardRef<HTMLElement, ContextualbarContentProps>(
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
