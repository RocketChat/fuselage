import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type MessageToolbarWrapperProps = HTMLAttributes<HTMLDivElement> & {
  visible?: boolean;
};

const MessageToolbarWrapperFrame = styled(RcxView, {
  name: 'MessageToolbarWrapper',
  display: 'none',
  opacity: 0,
  '$group-message-hover': {
    display: 'inline-block' as any,
    opacity: 1,
  },
  variants: {
    visible: {
      true: {
        display: 'inline-block',
        opacity: 1,
      },
    },
  } as const,
});

const MessageToolbarWrapper = forwardRef<
  HTMLDivElement,
  MessageToolbarWrapperProps
>(function MessageToolbarWrapper({ className: _className, visible, ...props }, ref) {
  return (
    <MessageToolbarWrapperFrame
      ref={ref}
      visible={visible || undefined}
      {...(props as any)}
    />
  );
});

export default MessageToolbarWrapper;
