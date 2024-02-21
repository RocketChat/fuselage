import type { AllHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

type MessageNameContainerProps = AllHTMLAttributes<HTMLSpanElement>;

export const MessageNameContainer = forwardRef<
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
