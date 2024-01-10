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
}: BubbleProps) => {
  console.log('');
  return (
    <button
      className='rcx-bubble rcx-button rcx-button--primary rcx-box rcx-box--full'
      onClick={onClick}
      {...props}
    >
      <span className='rcx-bubble--content'>
        {icon && <Icon name={icon} size='x16' />}
        {children}
      </span>
      <span className='rcx-bubble--dismiss'>
        {onDismiss && (
          <Icon
            name='cross-small'
            size='x16'
            onClick={(e) => {
              e.stopPropagation();
              onDismiss();
            }}
          />
        )}
      </span>
    </button>
  );
};

export default Bubble;
