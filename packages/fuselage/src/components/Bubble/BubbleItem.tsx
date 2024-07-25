import type { IconName } from '@rocket.chat/icons';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';

/** @public */
export type BubbleItemProps = {
  label?: ReactNode;
  secondary?: boolean;
  icon?: IconName;
} & HTMLAttributes<HTMLSpanElement>;

/** @public */
function BubbleItem({ secondary, label, icon, ...props }: BubbleItemProps) {
  return (
    <span
      className={`rcx-bubble__item ${
        secondary ? 'rcx-bubble__item--secondary' : 'rcx-bubble__item--primary'
      }`}
      {...props}
    >
      {icon && <Icon name={icon} size='x16' mie={8} />}
      {label && <span>{label}</span>}
    </span>
  );
}

export default BubbleItem;
