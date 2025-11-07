import Box, { type BoxProps } from '../Box/index.js';
import { Skeleton } from '../Skeleton/index.js';

export type InputBoxSkeletonProps = BoxProps;

const InputBoxSkeleton = (props: InputBoxSkeletonProps) => (
  <Box rcx-skeleton__input {...props}>
    <Skeleton width='100%' />
  </Box>
);

export default InputBoxSkeleton;
