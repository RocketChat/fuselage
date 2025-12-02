import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

type MessageToolbarWrapperProps = HTMLAttributes<HTMLDivElement> & {
  visible?: boolean;
};

export const MessageToolbarWrapper = forwardRef<
  HTMLDivElement,
  MessageToolbarWrapperProps
>(function MessageToolbarWrapper({ className, visible, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={[
        'rcx-box rcx-box--full rcx-message-toolbar__wrapper',
        visible && 'rcx-message-toolbar__wrapper--visible',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
