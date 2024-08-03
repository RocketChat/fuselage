import type { ReactElement, ComponentProps } from 'react';
import { memo } from 'react';

import {
  ContextualbarV2 as Contextualbar,
  ContextualbarV2Header as ContextualbarHeader,
} from '.';
import { Box, Skeleton } from '..';

const ContextualbarSkeleton = (
  props: ComponentProps<typeof Box>
): ReactElement => (
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
