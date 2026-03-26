import type { ReactElement, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type MessageGenericPreviewContentProps = {
  children?: ReactNode;
  thumb?: ReactElement;
};

const ContentFrame = styled(RcxView, {
  name: 'MessageGenericPreviewContent',
  display: 'flex',
  flexDirection: 'row',
  // @ts-ignore
  fontSize: 0,
});

const ContentWrapper = styled(RcxView, {
  name: 'MessageGenericPreviewContentWrapper',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: 1,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  paddingBlock: 8,
  paddingInline: 16,
});

const MessageGenericPreviewContent = ({
  thumb,
  ...props
}: MessageGenericPreviewContentProps) => (
  <ContentFrame>
    {thumb}
    <ContentWrapper {...(props as any)} />
  </ContentFrame>
);

export default MessageGenericPreviewContent;
