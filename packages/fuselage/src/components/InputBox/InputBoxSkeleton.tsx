import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
import type { BoxProps } from '../Box';
import { Skeleton } from '../Skeleton';

export type InputBoxSkeletonProps = BoxProps;

// Previously .rcx-skeleton__input
const InputBoxSkeletonFrame = styled(RcxView, {
  name: 'InputBoxSkeleton',

  display: 'inline-flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 0,

  minWidth: 128,
  minHeight: 40,

  paddingBlock: 11, // 12 - 1px border
  paddingInline: 15, // 16 - 1px border

  verticalAlign: 'baseline',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceLight',
});

const InputBoxSkeleton = (props: InputBoxSkeletonProps) => (
  <InputBoxSkeletonFrame {...(props as any)}>
    <Skeleton width='100%' />
  </InputBoxSkeletonFrame>
);

export default InputBoxSkeleton;
