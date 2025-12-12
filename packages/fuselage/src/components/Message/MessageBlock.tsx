import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type MessageBlockProps = {
  fixedWidth?: boolean;
} & BoxProps;

const MessageBlock = forwardRef<HTMLDivElement, MessageBlockProps>(
  ({ className: _className, fixedWidth, ...props }, ref) => (
    <Box
      rcx-message-block
      rcx-message-block--width-fixed={fixedWidth}
      ref={ref}
      {...props}
    />
  ),
);

export default MessageBlock;
