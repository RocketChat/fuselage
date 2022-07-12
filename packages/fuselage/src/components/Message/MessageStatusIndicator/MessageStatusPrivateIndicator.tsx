import type { ComponentProps } from 'react';
import React from 'react';

import type { MessageStatusIndicatorItem } from './MessageStatusIndicatorItem';

type MessageStatusIndicatorItemProps = Pick<
  ComponentProps<typeof MessageStatusIndicatorItem>,
  'variant'
>;

export const MessageStatusPrivateIndicator = ({
  variant,
  ...props
}: MessageStatusIndicatorItemProps) => (
  <span
    className={[
      'rcx-message-status-indicator__item `rcx-message-status-indicator__item--private',
      variant && `rcx-message-status-indicator__item--${variant}`,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
