import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type SkeletonProps = BoxProps & {
  variant?: 'text' | 'rect' | 'circle';
};

const Skeleton = ({ variant = 'text', ...props }: SkeletonProps) => (
  <Box
    is='span'
    rcx-skeleton
    rcx-skeleton--text={variant === 'text'}
    rcx-skeleton--rect={variant === 'rect'}
    rcx-skeleton--circle={variant === 'circle'}
    {...props}
  />
);
export { Skeleton };
