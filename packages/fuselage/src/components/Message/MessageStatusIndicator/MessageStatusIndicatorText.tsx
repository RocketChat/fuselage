import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type MessageStatusIndicatorTextProps = {
  children: ReactNode;
};

const StatusTextFrame = styled(RcxText, {
  name: 'MessageStatusIndicatorText',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  whiteSpace: 'nowrap',
  color: '$fontSecondaryInfo',
  overflowWrap: 'normal',
});

const MessageStatusIndicatorText = ({
  children,
}: MessageStatusIndicatorTextProps) => (
  <StatusTextFrame aria-hidden>{children}</StatusTextFrame>
);

export default MessageStatusIndicatorText;
