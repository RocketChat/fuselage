import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

export type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

const StatusIndicatorFrame = styled(RcxView, {
  name: 'MessageStatusIndicator',
  marginBlock: 2,
  // @ts-ignore
  userSelect: 'none',
});

const MessageStatusIndicator = forwardRef<
  HTMLDivElement,
  MessageStatusIndicatorProps
>(function MessageStatusIndicator(props, ref) {
  return <StatusIndicatorFrame ref={ref} {...(props as any)} />;
});

export default MessageStatusIndicator;
