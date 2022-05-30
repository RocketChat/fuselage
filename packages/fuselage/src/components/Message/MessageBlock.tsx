import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type MessageBlockProps = {
  fixedWidth?: boolean;
} & ComponentProps<typeof Box>;

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
