import React, { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarProps = BoxProps;

const Contextualbar = forwardRef<HTMLElement, ContextualbarProps>(
  function Contextualbar(
    { children, width, position, bg = 'room', ...props },
    ref
  ) {
    return (
      <Box
        ref={ref}
        rcx-vertical-bar
        bg={bg}
        color='default'
        display='flex'
        flexDirection='column'
        flexShrink={0}
        width={width}
        borderInlineStartWidth='default'
        borderInlineStartColor='extra-light'
        borderInlineStartStyle='solid'
        height='full'
        position={position}
        insetInlineEnd='none'
        insetBlockStart='none'
        zIndex={5}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default memo(Contextualbar);
