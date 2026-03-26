import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../../primitives';

export type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

const AvatarRowFrame = styled(RcxView, {
  name: 'MessageMetricsItemAvatarRow',
  display: 'flex',
  flexDirection: 'row',
  marginInline: -2,
});

const MessageMetricsItemAvatarRow = ({
  className: _className,
  ...props
}: MessageMetricsItemProps) => (
  <AvatarRowFrame {...(props as any)} />
);

export default MessageMetricsItemAvatarRow;
