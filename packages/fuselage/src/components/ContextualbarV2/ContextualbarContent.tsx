import type { ForwardedRef } from 'react';
import React, { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarContentProps = BoxProps;

const ContextualbarContent = forwardRef(function ContextualbarContent(
  props: ContextualbarContentProps,
  ref: ForwardedRef<HTMLElement>
) {
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
});

export default memo(ContextualbarContent);
