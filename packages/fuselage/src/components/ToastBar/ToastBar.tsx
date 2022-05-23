import { css, keyframes } from '@rocket.chat/css-in-js';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import type { ReactNode } from 'react';
import React from 'react';

import Box from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';

export type ToastBarProps = {
  variant?: 'info' | 'success' | 'error';
  className?: string;
  children?: ReactNode;
  time?: number;
  id?: string;
  onClose?: (id: string) => void;
};

export function ToastBar({
  children,
  className = '',
  variant = 'info',
  time = 5,
  id,
  onClose,
}: ToastBarProps) {
  const iconName =
    (variant === 'success' && 'check') ||
    (variant === 'error' && 'warning') ||
    'info';

  const sideOpen = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const progressBar = keyframes`
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  `;

  const toastBarAnimation = css`
    animation: ${sideOpen} 0.5s;
  `;

  const progressBarAnimation = css`
  &::after {
    width: 0%;
    animation: ${progressBar} ${time}s;
  ;`;

  const uniqueId = useUniqueId();
  const toastId = id || uniqueId;

  return (
    <Box className={['rcx-toastbar-wrapper', toastBarAnimation]}>
      <div className={`rcx-toastbar rcx-toastbar--${variant} ${className}`}>
        <div className='rcx-toastbar-inner'>
          <Icon size='x20' name={iconName} />
          <div className='rcx-toastbar-content'>{children}</div>
          {onClose && (
            <div className='rcx-toastbar-close'>
              <Button
                small
                square
                ghost
                {...{
                  success: variant === 'success',
                  danger: variant === 'error',
                }}
                onClick={() => onClose(toastId)}
              >
                <Icon name='cross' size='x20' />
              </Button>
            </div>
          )}
        </div>
        <Box className={[progressBarAnimation, 'rcx-toastbar-progressbar']} />
      </div>
    </Box>
  );
}
