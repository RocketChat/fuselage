import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../../primitives';

export type MessageMetricsItemAvatarRowContentProps =
  HTMLAttributes<HTMLDivElement>;

const AvatarRowContentFrame = styled(RcxView, {
  name: 'MessageMetricsItemAvatarRowContent',
  marginInline: 2,
});

const MessageMetricsItemAvatarRowContent = ({
  className: _className,
  ...props
}: MessageMetricsItemAvatarRowContentProps) => (
  <AvatarRowContentFrame {...(props as any)} />
);

export default MessageMetricsItemAvatarRowContent;
