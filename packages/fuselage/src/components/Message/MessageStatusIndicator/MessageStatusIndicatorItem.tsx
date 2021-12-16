import React, { AllHTMLAttributes, ComponentProps } from 'react';

import { Icon } from '../..';

type MessageStatusIndicatorItemProps = {
  name: ComponentProps<typeof Icon>['name'];
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
