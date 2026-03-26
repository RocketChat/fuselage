import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';

export type ThreadMessageBodyProps = {
  children?: ReactNode;
};

const BodyFrame = styled(RcxText, {
  name: 'ThreadMessageBody',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontDefault',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
});

const ThreadMessageBody = (props: ThreadMessageBodyProps) => (
  <BodyFrame {...(props as any)} />
);

export default ThreadMessageBody;
