import type { Keys as IconName } from '@rocket.chat/icons';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';

type BubbleProps = {
  children: ReactNode;
  onClick: () => void;
  icon: IconName;
  onDismiss?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Bubble = ({
  children,
  onClick,
  icon,
  onDismiss,
  ...props
}: BubbleProps) => (
  <div
    className={`rcx-bubble rcx-box rcx-box--full ${
      onDismiss ? 'rcx-bubble--group' : ''
    }`}
  >
    <button className='rcx-bubble--content' onClick={onClick} {...props}>
      {icon && <Icon name={icon} size='x16' />}
      <span>{children}</span>
    </button>
    {onDismiss && (
      <button
        aria-label={`Dismiss ${children}`}
        className='rcx-bubble--dismiss'
        onClick={onClick}
        {...props}
      >
        <Icon
          name='cross-small'
          size='x16'
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
        />
      </button>
    )}
  </div>
);

export default Bubble;
