import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type MessageBlockProps = {
  fixedWidth?: boolean;
} & BoxProps;

export const MessageBlock = forwardRef(
  (
    { className: _className, fixedWidth, ...props }: MessageBlockProps,
    ref: Ref<HTMLDivElement>,
  ) => (
    <Box
      rcx-message-block
      rcx-message-block--width-fixed={fixedWidth}
      ref={ref}
      {...props}
    />
  ),
);
