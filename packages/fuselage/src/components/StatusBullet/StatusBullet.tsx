import type { AllHTMLAttributes } from 'react';
import React from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import styleSheet from './StatusBullet.styles.scss';

type StatusBulletProps = {
  status?: 'loading' | 'online' | 'busy' | 'away' | 'offline';
  size?: 'small' | 'large';
} & Omit<AllHTMLAttributes<HTMLElement>, 'size'>;

const StatusBullet = ({
  status = 'loading',
  size,
  className = '',
  ...props
}: StatusBulletProps) => {
  useStyleSheet();
  useStyleSheet(styleSheet);

  return (
    <span
      className={`rcx-box rcx-box--full rcx-status-bullet rcx-status-bullet--${status} ${
        size === 'small' ? 'rcx-status-bullet--small' : ''
      } ${className}`}
      {...props}
    />
  );
};
export { StatusBullet };
