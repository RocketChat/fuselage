import type { AllHTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

type MessageToolboxWrapperProps = AllHTMLAttributes<HTMLDivElement> & {
  visible?: boolean;
};

export const MessageToolboxWrapper = forwardRef(function ToolboxWrapper(
  { className, visible, ...props }: MessageToolboxWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={[
        'rcx-box rcx-box--full rcx-message-toolbox__wrapper',
        visible && 'rcx-message-toolbox__wrapper--visible',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
