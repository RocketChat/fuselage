import React, { AllHTMLAttributes, FC } from 'react';

type StatusBulletProps = {
  status?: 'loading' | 'online' | 'busy' | 'away' | 'offline';
  size?: 'small' | 'large';
} & Omit<AllHTMLAttributes<HTMLElement>, 'size'>;

const StatusBullet: FC<StatusBulletProps> = ({
  status = 'loading',
  size,
  className = '',
  ...props
}) => (
  <span
    className={`rcx-box rcx-box--full rcx-status-bullet rcx-status-bullet--${status} ${
      size === 'small' ? 'rcx-status-bullet--small' : ''
    } ${className}`}
    {...props}
  />
);
export { StatusBullet };
