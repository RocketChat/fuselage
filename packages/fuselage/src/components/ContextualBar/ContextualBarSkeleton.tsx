import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import ContextualBar from '.';
import Box from '../Box';
import { Skeleton } from '../Skeleton';

type ContextualBarSkeletonProps = ComponentProps<typeof Box> & {
  size: string;
  position: string;
};

const ContextualBarSkeleton = ({
  size,
  position,
  ...props
}: ContextualBarSkeletonProps): ReactElement<ContextualBarSkeletonProps> => (
  <ContextualBar {...props} width='100%' size={size} position={position}>
    <ContextualBar.Header>
      <Skeleton width='100%' />
    </ContextualBar.Header>
    <Box p='x24'>
      <Skeleton width='32px' height='32px' variant='rect' /> <Skeleton />
      {Array(5)
        .fill(5)
        .map((_, index) => (
          <Skeleton key={index} />
        ))}
    </Box>
  </ContextualBar>
);

export default memo(ContextualBarSkeleton);
