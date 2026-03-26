import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';

export type MessageReactionCounterProps = {
  counter: number;
  className?: string;
};

const CounterFrame = styled(RcxText, {
  name: 'MessageReactionCounter',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  marginInline: 2,
  overflowWrap: 'normal',
});

export const MessageReactionCounter = ({
  counter,
  className: _className,
}: MessageReactionCounterProps) => (
  <CounterFrame>{counter}</CounterFrame>
);
