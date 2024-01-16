import type { Keys as IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';

type BubbleProps = {
  children: ReactNode;
  onClick: () => void;
  icon?: IconName;
  onDismiss?: () => void;
  contentProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  dismissProps?: ButtonHTMLAttributes<HTMLButtonElement>;
} & AllHTMLAttributes<HTMLDivElement>;

const Bubble = ({
  children,
  onClick,
  icon,
  onDismiss,
  contentProps,
  dismissProps,
  ...props
}: BubbleProps) => (
  <div
    className={`rcx-bubble rcx-box rcx-box--full ${
      onDismiss ? 'rcx-bubble__group' : ''
    }`}
    {...props}
  >
    <button className='rcx-bubble__content' onClick={onClick} {...contentProps}>
      {icon && <Icon name={icon} size='x16' />}
      <span>{children}</span>
    </button>
    {onDismiss && (
      <button
        aria-label={`Dismiss ${children}`}
        className='rcx-bubble__dismiss'
        onClick={onDismiss}
        {...dismissProps}
      >
        <Icon name='cross-small' size='x16' />
      </button>
    )}
  </div>
);

export default Bubble;
