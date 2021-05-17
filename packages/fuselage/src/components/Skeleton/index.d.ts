import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type SkeletonProps = ComponentProps<typeof Box> & {
  variant?: 'rect';
};
export const Skeleton: ForwardRefExoticComponent<SkeletonProps>;
