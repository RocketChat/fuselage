import { css, keyframes } from '@rocket.chat/css-in-js';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, AllHTMLAttributes } from 'react';
import React from 'react';

import Box from '../Box';
import { IconButton } from '../Button';
import { Icon } from '../Icon';

export type ToastBarProps = {
  variant?: 'info' | 'success' | 'error';
  className?: string;
  children?: ReactNode;
  time?: number;
  id?: string;
  onClose?: (id: string) => void;
  buttonLabel?: string;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

export function ToastBar({
  children,
  className = '',
  variant = 'info',
  time = 5,
  id,
  onClose,
  buttonLabel = 'Close',
  ...props
}: ToastBarProps) {
  const iconName =
    (variant === 'success' && 'circle-check') ||
    (variant === 'error' && 'ban') ||
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
    }
  `;

  const uniqueId = useUniqueId();
  const toastId = id || uniqueId;

  return (
    <Box
      className={[
        `rcx-toastbar rcx-toastbar--${variant} ${className}`,
        toastBarAnimation,
      ]}
      elevation='2nb'
      borderRadius='x4'
      role='alert'
      {...props}
    >
      <div className='rcx-toastbar_inner'>
        <Icon
          className={`rcx-toastbar_icon--${variant}`}
          size='x20'
          name={iconName}
        />
        <div className='rcx-toastbar_content' id={toastId}>
          {children}
        </div>
        {onClose && (
          <div className='rcx-toastbar-close'>
            <IconButton
              tiny
              onClick={() => onClose(toastId)}
              icon='cross'
              aria-label={buttonLabel}
            />
          </div>
        )}
      </div>
      <Box className={[progressBarAnimation, 'rcx-toastbar_progressbar']} />
    </Box>
  );
}
