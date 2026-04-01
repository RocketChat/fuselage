import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../../primitives';

import MessageMetricsItemIcon from './MessageMetricsItemIcon';
import MessageMetricsItemLabel from './MessageMetricsItemLabel';

export type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

const MetricsItemFrame = styled(RcxView, {
  name: 'MessageMetricsItem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginInline: 4,
  color: '$fontDefault',
});

const MessageMetricsItem = Object.assign(
  ({ className: _className, ...props }: MessageMetricsItemProps) => (
    <MetricsItemFrame {...(props as any)} />
  ),
  {
    /** @deprecated prefer using named imports */
    Icon: MessageMetricsItemIcon,
    /** @deprecated prefer using named imports */
    Label: MessageMetricsItemLabel,
  },
);

export default MessageMetricsItem;
