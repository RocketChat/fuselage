import type { ComponentProps } from 'react';
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

type ProgressBarProps = ComponentProps<typeof Box> & {
  percentage: number;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  error?: string;
  animated?: boolean;
};

export const ProgressBar = forwardRef(function ProgressBar(
  { percentage, variant = 'info', error, animated, ...props }: ProgressBarProps,
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
        bg={error ? colors.danger : colors[variant]}
        rcx-progress-bar__fill
        rcx-progress-bar__fill-complete={animated && percentage >= 100}
        width={getWidth(percentage)}
      />
    </Box>
  );
});
