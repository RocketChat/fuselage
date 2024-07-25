import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type MessageBlockProps = {
  fixedWidth?: boolean;
} & BoxProps;

export const MessageBlock = ({
  className: _className,
  fixedWidth,
  ...props
}: MessageBlockProps) => (
  <Box
    rcx-message-block
    rcx-message-block--width-fixed={fixedWidth}
    {...props}
  />
);
