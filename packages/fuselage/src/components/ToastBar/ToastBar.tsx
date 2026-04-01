import { css, keyframes } from '@rocket.chat/css-in-js';
import { type ReactNode, type AllHTMLAttributes, useId } from 'react';
import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../primitives';
import { IconButton } from '../Button';
import { Icon } from '../Icon';

export type ToastBarProps = {
  variant?: 'info' | 'success' | 'error';
  className?: string;
  children?: ReactNode;
  time?: number;
  isPaused?: boolean;
  id?: string;
  onClose?: (id: string) => void;
  buttonLabel?: string;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const ToastBarFrame = styled(RcxView, {
  name: 'ToastBar',
  position: 'relative',
  minWidth: 232,
  maxWidth: 416,
  color: '$fontDefault',
  borderRadius: '$x4',
  backgroundColor: '$surfaceTint',
  boxShadow:
    '0px 0px 2px rgba(0, 0, 0, 0.16), 0px 0px 12px rgba(0, 0, 0, 0.12)',
});

const ToastBarInner = styled(RcxView, {
  name: 'ToastBarInner',
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
});

const ToastBarContent = styled(RcxText, {
  name: 'ToastBarContent',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  width: '100%',
  margin: 0,
  marginInline: 16,
  overflowWrap: 'normal',
});

const variantColors: Record<string, string> = {
  success: 'var(--statusFontOnSuccess)',
  error: 'var(--statusFontOnDanger)',
};

/**
 * Shows alerts in a toast component.
 */
function ToastBar({
  children,
  className = '',
  variant = 'info',
  time = 5,
  isPaused,
  id,
  onClose,
  buttonLabel = 'Dismiss alert',
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

  const topBarStyle = css`
    &::before {
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 4px;
      content: '';
      border-radius: 4px 4px 0 0;
      background-color: ${variant !== 'info'
        ? variantColors[variant] || 'transparent'
        : 'transparent'};
    }
  `;

  const progressBarStyle = css`
    position: absolute;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 4px;
    border-radius: 0 0 4px 4px;
    &::after {
      display: block;
      height: 100%;
      content: '';
      background-color: var(--surfaceNeutral);
      width: 0%;
      animation: ${progressBar} ${time}s;
      animation-fill-mode: forwards;
      animation-play-state: ${isPaused ? 'paused' : 'running'};
    }
  `;

  const uniqueId = useId();
  const toastId = id || uniqueId;

  const role = variant === 'error' ? 'alert' : 'status';

  return (
    <ToastBarFrame
      className={[toastBarAnimation, topBarStyle, className]
        .filter(Boolean)
        .join(' ')}
      {...(props as any)}
    >
      <ToastBarInner>
        <Icon
          size='x20'
          name={iconName}
          style={
            variant !== 'info' ? { color: variantColors[variant] } : undefined
          }
        />
        <ToastBarContent role={role}>{children}</ToastBarContent>
        {onClose && (
          <RcxView>
            <IconButton
              tiny
              aria-label={buttonLabel}
              onClick={() => onClose(toastId)}
              icon='cross'
            />
          </RcxView>
        )}
      </ToastBarInner>
      <div className={progressBarStyle} />
    </ToastBarFrame>
  );
}

export default ToastBar;
