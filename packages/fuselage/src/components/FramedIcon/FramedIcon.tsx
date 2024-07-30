import type { IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../Icon';

/** @public */
export type FramedIconProps = {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  neutral?: boolean;
  icon: IconName;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/** @public */
const FramedIcon = ({
  info,
  success,
  warning,
  danger,
  neutral,
  icon,
  ...props
}: FramedIconProps) => (
  <Icon
    {...props}
    rcx-framed-icon
    rcx-framed-icon--info={info}
    rcx-framed-icon--success={success}
    rcx-framed-icon--warning={warning}
    rcx-framed-icon--danger={danger}
    rcx-framed-icon--neutral={
      neutral || (!info && !success && !warning && !danger)
    }
    name={icon}
    size={20}
  />
);

export default FramedIcon;
