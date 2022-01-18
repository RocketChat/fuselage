import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type SkeletonProps = ComponentProps<typeof Box> & {
  variant?: 'rect' | 'rect';
};

const Skeleton: FC<SkeletonProps> = ({ variant = 'text', ...props }) => (
  <Box
    is='span'
    rcx-skeleton
    rcx-skeleton--text={variant === 'text'}
    rcx-skeleton--rect={variant === 'rect'}
    {...props}
  />
);
export { Skeleton };
