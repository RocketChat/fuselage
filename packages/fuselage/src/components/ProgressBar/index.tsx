import React, { forwardRef, ComponentProps } from 'react';

import { Box } from '../Box';

const processPercentage = (percentage: number): string => {
  const newPercentage = Math.min(Math.max(0, percentage), 100);
  return newPercentage.toFixed(1);
};

const getColor = (fixedPercentage: number, error?: string) => {
  if (error) {
    return 'danger-200';
  }
  return fixedPercentage >= 100 ? 'success-200' : 'primary-200';
};

type ProgressBarProps = ComponentProps<typeof Box> & {
  barColor?: ComponentProps<typeof Box>['bg'];
  percentage: number;
  error?: string;
};

export const ProgressBar = forwardRef(function ProgressBar(
  { barColor, percentage, error, ...props }: ProgressBarProps,
  ref
) {
  return (
    <Box ref={ref} rcx-progress-bar title={error || undefined} {...props}>
      <Box
        bg={barColor || getColor(percentage, error)}
        rcx-progress-bar__fill
        rcx-progress-bar__fill-complete={percentage >= 100}
        width={`${processPercentage(percentage)}%`}
      />
    </Box>
  );
});
