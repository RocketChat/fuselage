import type { ComponentProps } from 'react';
import React, { memo } from 'react';

import { Box } from '..';

type ContextualbarProps = ComponentProps<typeof Box>;

const Contextualbar = ({
  children,
  width,
  position,
  bg = 'room',
  ...props
}: ContextualbarProps) => (
  <Box
    rcx-vertical-bar
    bg={bg}
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

export default memo(Contextualbar);
