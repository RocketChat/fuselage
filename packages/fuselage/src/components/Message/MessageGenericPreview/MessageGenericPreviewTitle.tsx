import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type MessageGenericPreviewTitleProps = {
  externalUrl?: string;
} & HTMLAttributes<HTMLSpanElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const TitleFrame = styled(RcxText, {
  name: 'MessageGenericPreviewTitle',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  display: 'block',
  marginBlockEnd: 4,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  color: '$fontDefault',
});

const MessageGenericPreviewTitle = ({
  externalUrl,
  children,
  ...props
}: MessageGenericPreviewTitleProps) => {
  if (externalUrl) {
    return (
      <a
        className='rcx-box'
        style={{
          fontFamily: 'var(--f-family-body)',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          display: 'block',
          marginBlockEnd: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: 'var(--fontInfo)',
        }}
        href={externalUrl}
        target='_blank'
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return <TitleFrame {...(props as any)}>{children}</TitleFrame>;
};

export default MessageGenericPreviewTitle;
