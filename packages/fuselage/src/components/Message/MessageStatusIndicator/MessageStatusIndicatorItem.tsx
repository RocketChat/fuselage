import type { IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes } from 'react';

import { Icon } from '../..';

/** @public */
export type MessageStatusIndicatorItemProps = {
  name: IconName;
  variant?: 'success' | 'danger' | 'warning' | 'primary';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/** @public */
const MessageStatusIndicatorItem = ({
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

export default MessageStatusIndicatorItem;
