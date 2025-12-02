import type { AllHTMLAttributes } from 'react';

import type { IconProps } from '../..';
import { Icon } from '../..';

type MessageStatusIndicatorItemProps = {
  name: IconProps['name'];
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
