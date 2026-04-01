import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type MessageGenericPreviewFooterProps = {
  children?: ReactNode;
  clamp?: boolean;
};

const FooterFrame = styled(RcxText, {
  name: 'MessageGenericPreviewFooter',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  width: '100%',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  color: '$fontSecondaryInfo',
});

const MessageGenericPreviewFooter = ({
  children,
}: MessageGenericPreviewFooterProps) => (
  <FooterFrame>{children}</FooterFrame>
);

export default MessageGenericPreviewFooter;
