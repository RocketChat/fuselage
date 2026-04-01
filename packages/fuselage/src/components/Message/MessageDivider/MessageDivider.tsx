import { styled } from '@tamagui/core';
import type { ReactNode } from 'react';

import { RcxText, RcxView } from '../../../primitives';

export type MessageDividerProps = {
  children?: ReactNode;
  unreadLabel?: string;
};

const DividerContainer = styled(RcxView, {
  name: 'MessageDivider',

  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: -1,
  paddingInline: 20,
});

const DividerBar = styled(RcxView, {
  name: 'MessageDividerBar',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexGrow: 1,
});

const DividerLine = styled(RcxView, {
  name: 'MessageDividerLine',

  flexGrow: 1,
  height: 1,
  backgroundColor: '$strokeExtraLight',

  variants: {
    unread: {
      true: {
        backgroundColor: '$strokeError',
      },
    },
  } as const,
});

const DividerWrapper = styled(RcxText, {
  name: 'MessageDividerWrapper',

  display: 'block',
  marginBlock: '$x8',
  paddingInline: '$x8',
  backgroundColor: '$surfaceRoom',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  color: '$fontDefault',
});

const UnreadWrapper = styled(RcxText, {
  name: 'MessageDividerUnread',

  display: 'block',
  position: 'absolute',
  zIndex: 1,
  order: 1,
  paddingInlineStart: '$x8',
  color: '$fontDanger',
  backgroundColor: '$surfaceRoom',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
});

const MessageDivider = ({
  children,
  unreadLabel,
  ...props
}: MessageDividerProps) => (
  <DividerContainer role='separator' {...props}>
    {children && (
      <>
        <DividerBar>
          <DividerLine unread={!!unreadLabel || undefined} />
        </DividerBar>
        <DividerWrapper>{children}</DividerWrapper>{' '}
      </>
    )}
    <DividerBar>
      {unreadLabel && <UnreadWrapper>{unreadLabel}</UnreadWrapper>}
      <DividerLine unread={!!unreadLabel || undefined} />
    </DividerBar>
  </DividerContainer>
);

export default MessageDivider;
