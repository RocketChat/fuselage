import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

type MessageToolbarWrapperProps = HTMLAttributes<HTMLDivElement> & {
  visible?: boolean;
};

export const MessageToolbarWrapper = forwardRef(function MessageToolbarWrapper(
  { className, visible, ...props }: MessageToolbarWrapperProps,
  ref: Ref<HTMLDivElement>
) {
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
