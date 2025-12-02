import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type MessageBlockProps = {
  fixedWidth?: boolean;
} & BoxProps;

export const MessageBlock = forwardRef<HTMLDivElement, MessageBlockProps>(
  ({ className: _className, fixedWidth, ...props }, ref) => (
    <Box
      rcx-message-block
      rcx-message-block--width-fixed={fixedWidth}
      ref={ref}
      {...props}
    />
  ),
);
