import { forwardRef, type ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

export type MessageBlockProps = {
  fixedWidth?: boolean;
  children?: ReactNode;
  className?: string;
};

const MessageBlockFrame = styled(RcxView, {
  name: 'MessageBlock',
  display: 'flex',
  flexDirection: 'column',
  marginBlock: 2,
  variants: {
    fixedWidth: {
      true: {
        flexGrow: 0,
        flexShrink: 1,
        width: 100,
        maxWidth: 368,
      },
    },
  } as const,
});

const MessageBlock = forwardRef<HTMLDivElement, MessageBlockProps>(
  ({ className: _className, fixedWidth, ...props }, ref) => (
    <MessageBlockFrame
      ref={ref}
      fixedWidth={fixedWidth || undefined}
      {...(props as any)}
    />
  ),
);

export default MessageBlock;
