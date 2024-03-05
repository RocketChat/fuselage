import type { HTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

type MessageToolbarWrapperProps = HTMLAttributes<HTMLDivElement>;

export const MessageToolbarWrapper = forwardRef(function MessageToolbarWrapper(
  { className, ...props }: MessageToolbarWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={[
        'rcx-box rcx-box--full rcx-message-toolbar__wrapper',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
