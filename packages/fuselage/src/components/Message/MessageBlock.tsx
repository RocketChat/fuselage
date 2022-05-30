import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type MessageBlockProps = {
  widthFixed?: boolean;
} & ComponentProps<typeof Box>;

export const MessageBlock = ({
  className: _className,
  widthFixed,
  ...props
}: MessageBlockProps) => (
  <Box
    rcx-message-block
    rcx-message-block--width-fixed={widthFixed}
    {...props}
  />
);
