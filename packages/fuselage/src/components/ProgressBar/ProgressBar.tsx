import type { AllHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

const getWidth = (percentage: number): string =>
  `${Math.min(Math.max(0, percentage), 100).toFixed(1)}%`;

const colors = {
  info: 'status-font-on-info',
  success: 'status-font-on-success',
  warning: 'status-font-on-warning',
  danger: 'status-font-on-danger',
};
const lightColors = {
  info: 'status-background-info',
  success: 'status-background-success',
  warning: 'status-background-warning',
  danger: 'status-background-danger',
};

const getColor = (
  isLight: boolean,
  variant: 'info' | 'success' | 'warning' | 'danger',
  error?: string
) => {
  if (error) {
    return isLight ? lightColors.danger : colors.danger;
  }
  return isLight ? lightColors[variant] : colors[variant];
};

type ProgressBarProps = {
  percentage: number;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  error?: string;
  animated?: boolean;
  light?: boolean;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

export const ProgressBar = forwardRef(function ProgressBar(
  {
    percentage,
    variant = 'info',
    error,
    animated,
    light = false,
    ...props
  }: ProgressBarProps,
  ref
) {
  return (
    <Box
      ref={ref}
      rcx-progress-bar
      title={error || undefined}
      overflow='hidden'
      {...props}
    >
      <Box
        bg={getColor(light, variant, error)}
        rcx-progress-bar__fill--animated={animated}
        rcx-progress-bar__fill
        width={getWidth(percentage)}
      />
    </Box>
  );
});
