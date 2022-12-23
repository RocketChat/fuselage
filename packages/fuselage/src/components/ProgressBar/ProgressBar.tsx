import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

const getWidth = (percentage: number): string =>
  `${Math.min(Math.max(0, percentage), 100).toFixed(1)}%`;

const getColor = (percentage: number, error?: string) => {
  if (error) {
    return 'status-font-on-danger';
  }

  if (percentage >= 100) {
    return 'status-font-on-success';
  }

  return 'status-font-on-info';
};

type ProgressBarProps = ComponentProps<typeof Box> & {
  barColor?: ComponentProps<typeof Box>['bg'];
  percentage: number;
  error?: string;
  animated?: boolean;
};

export const ProgressBar = forwardRef(function ProgressBar(
  { barColor, percentage, error, animated = true, ...props }: ProgressBarProps,
  ref
) {
  return (
    <Box ref={ref} rcx-progress-bar title={error || undefined} {...props}>
      <Box
        bg={barColor || getColor(percentage, error)}
        rcx-progress-bar__fill
        rcx-progress-bar__fill-complete={animated && percentage >= 100}
        width={getWidth(percentage)}
      />
    </Box>
  );
});
