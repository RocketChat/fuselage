import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

export type MessageNameContainerProps = HTMLAttributes<HTMLSpanElement>;

const MessageNameContainerFrame = styled(RcxText, {
  name: 'MessageNameContainer',
  display: 'inline',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
});

const MessageNameContainer = forwardRef<
  HTMLSpanElement,
  MessageNameContainerProps
>(function MessageNameContainer(props, ref) {
  return <MessageNameContainerFrame ref={ref} {...(props as any)} />;
});

export default MessageNameContainer;
