import type { BoxProps } from '../Box';
import Box from '../Box';
import Skeleton from '../Skeleton';

/** @public */
export type InputBoxSkeletonProps = BoxProps;

/** @public */
const InputBoxSkeleton = (props: InputBoxSkeletonProps) => (
  <Box rcx-skeleton__input {...props}>
    <Skeleton width='100%' />
  </Box>
);

export default InputBoxSkeleton;
