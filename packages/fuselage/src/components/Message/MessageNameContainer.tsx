import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type MessageNameContainerProps = HTMLAttributes<HTMLSpanElement>;

const MessageNameContainer = forwardRef<
  HTMLSpanElement,
  MessageNameContainerProps
>(function MessageNameContainer(props, ref) {
  return (
    <span
      ref={ref}
      className='rcx-box rcx-box--full rcx-message-header__name-container'
      {...props}
    />
  );
});

export default MessageNameContainer;
