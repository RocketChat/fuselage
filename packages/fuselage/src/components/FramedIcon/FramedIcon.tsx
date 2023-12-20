import type { Keys } from '@rocket.chat/icons';
import React from 'react';

import { Icon } from '../Icon';

type FramedIconProps = {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  neutral?: boolean;
  icon: Keys;
};

export const FramedIcon = ({
  info,
  success,
  warning,
  danger,
  neutral,
  icon,
}: FramedIconProps) => (
  <Icon
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
