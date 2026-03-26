import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type ThreadMessageRowProps = HTMLAttributes<HTMLDivElement>;

const RowFrame = styled(RcxView, {
  name: 'ThreadMessageRow',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexShrink: 1,
  width: '100%',
  cursor: 'pointer',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const ThreadMessageRow = (props: ThreadMessageRowProps) => (
  <RowFrame {...(props as any)} />
);

export default ThreadMessageRow;
