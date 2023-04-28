import React from 'react';

import { useStyleSheet } from '../../../hooks/useStyleSheet';
import type { StatusBulletProps } from '../StatusBullet';
import styleSheet from '../StatusBullet.styles.scss';

const Loading = ({ size, className, ...props }: StatusBulletProps) => {
  useStyleSheet();
  useStyleSheet(styleSheet);

  return (
    <svg
      {...props}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`rcx-status-bullet rcx-status-bullet--loading ${className} ${
        size === 'small' ? 'rcx-status-bullet--small' : ''
      }`}
    >
      <circle
        cx='6'
        cy='6'
        r='5'
        className='rcx-status-bullet rcx-status-bullet--loading'
        stroke-width='2'
        stroke-dasharray='2 2'
      />
    </svg>
  );
};

export default Loading;
