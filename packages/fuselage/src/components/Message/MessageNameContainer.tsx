import type { ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type MessageNameContainerProps = HTMLAttributes<HTMLSpanElement>;

export const MessageNameContainer = forwardRef(function MessageNameContainer(
  props: MessageNameContainerProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <span
      ref={ref}
      className='rcx-box rcx-box--full rcx-message-header__name-container'
      {...props}
    />
  );
});
