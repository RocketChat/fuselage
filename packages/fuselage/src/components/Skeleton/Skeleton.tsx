import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type SkeletonProps = ComponentProps<typeof Box> & {
  variant?: 'text' | 'rect';
};

const Skeleton = ({ variant = 'text', ...props }: SkeletonProps) => (
  <Box
    is='span'
    rcx-skeleton
    rcx-skeleton--text={variant === 'text'}
    rcx-skeleton--rect={variant === 'rect'}
    {...props}
  />
);
export { Skeleton };
