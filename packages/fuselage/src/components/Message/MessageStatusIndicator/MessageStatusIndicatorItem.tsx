import type { IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../..';

export type MessageStatusIndicatorItemProps = {
  name: IconName;
  variant?: 'success' | 'danger' | 'warning' | 'primary';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

export const MessageStatusIndicatorItem = ({
  name,
  variant,
  ...props
}: MessageStatusIndicatorItemProps) => (
  <Icon
    name={name}
    size='x16'
    className={[
      'rcx-message-status-indicator__item',
      variant && `rcx-message-status-indicator__item--${variant}`,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
