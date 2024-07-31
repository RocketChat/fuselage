import { memo } from 'react';

import { Contextualbar, ContextualbarHeader } from '.';
import { Box, type BoxProps } from '../Box';
import Skeleton from '../Skeleton';

type ContextualbarSkeletonProps = BoxProps;

const ContextualbarSkeleton = (props: ContextualbarSkeletonProps) => (
  <Contextualbar {...props}>
    <ContextualbarHeader>
      <Skeleton width='100%' />
    </ContextualbarHeader>
    <Box p={24}>
      <Skeleton mbe={4} width='32px' height='32px' variant='rect' />
      {Array(5)
        .fill(5)
        .map((_, index) => (
          <Skeleton key={index} />
        ))}
    </Box>
  </Contextualbar>
);

export default memo(ContextualbarSkeleton);
