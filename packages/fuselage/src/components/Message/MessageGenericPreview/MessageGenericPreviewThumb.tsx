import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type MessageGenericPreviewThumbProps = HTMLAttributes<HTMLDivElement>;

const ThumbFrame = styled(RcxView, {
  name: 'MessageGenericPreviewThumb',
  width: 96,
  height: 96,
  flexShrink: 0,
});

const MessageGenericPreviewThumb = (props: MessageGenericPreviewThumbProps) => (
  <ThumbFrame {...(props as any)} />
);

export default MessageGenericPreviewThumb;
