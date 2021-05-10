import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type InputBoxProps = ComponentProps<typeof Box>;
type InputBoxSkeletonProps = ComponentProps<typeof Box>;

export const InputBox: ForwardRefExoticComponent<InputBoxProps> & {
  Skeleton: ForwardRefExoticComponent<InputBoxSkeletonProps>;
};
