import type { ReactNode } from 'react';

import type { MessageStatusIndicatorItemProps } from './MessageStatusIndicatorItem';

/** @public */
export type MessageStatusPrivateIndicatorProps = {
  children?: ReactNode;
  variant?: MessageStatusIndicatorItemProps['variant'];
};

/** @public */
const MessageStatusPrivateIndicator = ({
  children,
  variant,
}: MessageStatusPrivateIndicatorProps) => (
  <span
    className={[
      'rcx-message-status-indicator__item `rcx-message-status-indicator__item--private',
      variant && `rcx-message-status-indicator__item--${variant}`,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </span>
);

export default MessageStatusPrivateIndicator;
