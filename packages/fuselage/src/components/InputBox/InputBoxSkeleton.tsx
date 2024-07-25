import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Skeleton } from '../Skeleton';

type InputBoxSkeletonProps = BoxProps;

export const InputBoxSkeleton = (props: InputBoxSkeletonProps) => (
  <Box rcx-skeleton__input {...props}>
    <Skeleton width='100%' />
  </Box>
);
