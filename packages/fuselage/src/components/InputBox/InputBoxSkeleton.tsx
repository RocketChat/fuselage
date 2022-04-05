import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
import { Skeleton } from '../Skeleton';

type InputBoxSkeletonProps = ComponentProps<typeof Box>;

export const InputBoxSkeleton = (props: InputBoxSkeletonProps) => (
  <Box rcx-skeleton__input {...props}>
    <Skeleton width='100%' />
  </Box>
);
