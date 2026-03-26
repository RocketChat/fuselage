import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { css, keyframes } from '@rocket.chat/css-in-js';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const getWidth = (percentage: number): string =>
  `${Math.min(Math.max(0, percentage), 100).toFixed(1)}%`;

const progressBarAnimation = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    width: inherit;
    opacity: 0;
  }
`;

const animatedClass = css`
  position: relative;

  &::before {
    position: absolute;
    inset: 0;

    width: inherit;

    content: '';
    animation: ${progressBarAnimation} 2s ease-out infinite;

    opacity: 0;
    border-radius: 0.5rem;
    background: var(--surfaceLight);
  }
`;

const ProgressBarTrack = styled(RcxView, {
  name: 'ProgressBar',

  display: 'block',
  overflow: 'hidden',
  width: '100%' as any,
  height: 8,
  borderRadius: '$x8',
  backgroundColor: '$surfaceNeutral',
});

const ProgressBarFill = styled(RcxView, {
  name: 'ProgressBarFill',

  display: 'block',
  height: 8,
  borderRadius: '$x8',
});

const colors = {
  info: '$statusFontOnInfo',
  success: '$statusFontOnSuccess',
  warning: '$statusFontOnWarning',
  danger: '$statusFontOnDanger',
};

const lightColors = {
  info: '$statusBgInfo',
  success: '$statusBgSuccess',
  warning: '$statusBgWarning',
  danger: '$statusBgDanger',
};

const getColor = (
  isLight: boolean,
  variant: 'info' | 'success' | 'warning' | 'danger',
  error?: string,
) => {
  if (error) {
    return isLight ? lightColors.danger : colors.danger;
  }
  return isLight ? lightColors[variant] : colors[variant];
};

export type ProgressBarProps = {
  percentage: number;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  error?: string;
  animated?: boolean;
  light?: boolean;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/**
 * The `ProgressBar` is used to inform the user the progress of an operation.
 */
const ProgressBar = forwardRef<unknown, ProgressBarProps>(function ProgressBar(
  { percentage, variant = 'info', error, animated, light = false, ...props },
  ref,
) {
  const fillColor = getColor(light, variant, error);

  return (
    <ProgressBarTrack
      ref={ref}
      title={error || undefined}
      {...(props as any)}
    >
      <ProgressBarFill
        className={animated ? animatedClass : undefined}
        style={{
          width: getWidth(percentage),
          backgroundColor: `var(--${fillColor.slice(1)})`,
        }}
      />
    </ProgressBarTrack>
  );
});

export default ProgressBar;
