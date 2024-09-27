import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export const MessageNameContainer = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(function MessageNameContainer(props, ref) {
  return (
    <span
      ref={ref}
      className='rcx-box rcx-box--full rcx-message-header__name-container'
      {...props}
    />
  );
});
