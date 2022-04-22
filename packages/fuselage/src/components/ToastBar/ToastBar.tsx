import styled from '@rocket.chat/styled';
import type { ReactNode } from 'react';
import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';

export type ToastBarProps = {
  variant?: 'info' | 'success' | 'error';
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  size?: string;
  progress?: string;
};

export const ToastBarProgressBar = styled(
  'div',
  ({ progress: _progress, ...props }: ToastBarProps) => props
)`
  &::after {
    width: ${(p) => (p.progress ? p.progress : '0%')};
  }
`;

export function ToastBar({
  children,
  className = '',
  variant = 'info',
  size,
  progress,
}: ToastBarProps) {
  const iconName =
    (variant === 'success' && 'check') ||
    (variant === 'error' && 'warning') ||
    'info';

  return (
    <div className='rcx-box rcx-box--full rcx-toastbar-wrapper'>
      <div
        className={`rcx-toastbar rcx-toastbar--${variant} ${
          size === 'large' ? 'rcx-toastbar--large' : ''
        } ${className}`}
      >
        <div className='rcx-toastbar-inner'>
          <Icon size='x20' name={iconName} />
          <div className='rcx-toastbar-content'>{children}</div>
          <div className='rcx-toastbar-close'>
            <Button
              small
              square
              ghost
              {...{
                success: variant === 'success',
                danger: variant === 'error',
              }}
            >
              <Icon name='cross' size='x20' />
            </Button>
          </div>
        </div>
        <ToastBarProgressBar
          progress={progress}
          className='rcx-toastbar-progressbar'
        />
      </div>
    </div>
  );
}
