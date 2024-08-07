import type { ReactElement, ComponentProps } from 'react';
import { memo } from 'react';

import Box from '../Box';
import { Skeleton } from '../Skeleton';
import Contextualbar from './Contextualbar';
import ContextualbarHeader from './ContextualbarHeader';

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
