import React, { FC, ComponentProps } from 'react';

import { MessageStatusIndicatorItem } from './MessageStatusIndicatorItem';

type MessageStatusIndicatorItemProps = ComponentProps<
  typeof MessageStatusIndicatorItem
>;

export const MessageStatusPrivateIndicator: FC<
  Omit<MessageStatusIndicatorItemProps, 'name'>
> = ({ variant, ...props }) => (
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
