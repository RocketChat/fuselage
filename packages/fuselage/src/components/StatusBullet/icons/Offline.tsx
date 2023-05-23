import React from 'react';

import type { StatusBulletProps } from '../StatusBullet';

const Offline = ({ size, className, ...props }: StatusBulletProps) => (
  <svg
    {...props}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`rcx-status-bullet rcx-status-bullet--offline ${className} ${
      size === 'small' ? 'rcx-status-bullet--small' : ''
    }`}
  >
    <circle
      cx='6'
      cy='6'
      r='5'
      className={`rcx-status-bullet rcx-status-bullet--offline`}
      strokeWidth='2'
    />
  </svg>
);

export default Offline;
