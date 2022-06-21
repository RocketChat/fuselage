import type { ComponentProps, ReactElement, ReactNode } from 'react';
import React, { memo } from 'react';

import Box from '../Box';

type ContextualBarProps = ComponentProps<typeof Box> & {
  children: ReactNode;
  size: string;
  position: string;
};

const ContextualBar = ({
  children,
  size,
  position,
  ...props
}: ContextualBarProps): ReactElement<ContextualBarProps> => (
  <Box
    rcx-vertical-bar
    backgroundColor='surface'
    display='flex'
    flexDirection='column'
    flexShrink={0}
    width={size}
    borderInlineStartWidth='2px'
    borderInlineStartColor='neutral-300'
    borderInlineStartStyle='solid'
    height='full'
    position={position}
    zIndex={5}
    insetInlineEnd={'none'}
    insetBlockStart={'none'}
    {...props}
  >
    {children}
  </Box>
);

export default memo(ContextualBar);
