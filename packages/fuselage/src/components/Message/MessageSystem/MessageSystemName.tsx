import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';
import type { MessageNameProps } from '../MessageName';

export type MessageSystemNameProps = MessageNameProps;

const SystemNameFrame = styled(RcxText, {
  name: 'MessageSystemName',
  fontFamily: '$body',
  fontSize: '$p2b',
  fontWeight: '$p2b',
  lineHeight: '$p2b',
  letterSpacing: '$p2b',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexShrink: 0,
});

const MessageSystemName = (props: MessageSystemNameProps) => (
  <SystemNameFrame {...(props as any)} />
);

export default MessageSystemName;
