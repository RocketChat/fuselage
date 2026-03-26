import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type MessageGenericPreviewProps = HTMLAttributes<HTMLDivElement>;

const GenericPreviewFrame = styled(RcxView, {
  name: 'MessageGenericPreview',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  color: '$fontSecondaryInfo',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeExtraLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceTint',
  // @ts-ignore
  fontSize: 0,
});

const MessageGenericPreview = (props: MessageGenericPreviewProps) => (
  <GenericPreviewFrame {...(props as any)} />
);

export default MessageGenericPreview;
