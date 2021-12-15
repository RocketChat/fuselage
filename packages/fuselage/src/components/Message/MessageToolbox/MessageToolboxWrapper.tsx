import React, { AllHTMLAttributes, forwardRef } from 'react';

export const MessageToolboxWrapper = forwardRef<
  HTMLDivElement,
  AllHTMLAttributes<HTMLDivElement>
>(function ToolboxWrapper({ className, ...props }, ref) {
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
