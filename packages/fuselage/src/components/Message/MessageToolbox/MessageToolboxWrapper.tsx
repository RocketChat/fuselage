import React, { AllHTMLAttributes, forwardRef, Ref } from 'react';

type MessageToolboxWrapperProps = AllHTMLAttributes<HTMLDivElement>;

export const MessageToolboxWrapper = forwardRef(function ToolboxWrapper(
  { className, ...props }: MessageToolboxWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={[
        'rcx-box rcx-box--full rcx-message-toolbox__wrapper',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
