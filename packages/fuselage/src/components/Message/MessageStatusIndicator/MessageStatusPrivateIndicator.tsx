import type { ReactNode } from 'react';
import React from 'react';

import type { MessageStatusIndicatorItemProps } from './MessageStatusIndicatorItem';

type MessageStatusPrivateIndicatorProps = {
  children?: ReactNode;
  variant?: MessageStatusIndicatorItemProps['variant'];
};

export const MessageStatusPrivateIndicator = ({
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
