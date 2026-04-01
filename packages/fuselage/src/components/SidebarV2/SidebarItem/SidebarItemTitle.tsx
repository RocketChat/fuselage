import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

const SidebarItemTitleFrame = styled(RcxText, {
  name: 'SidebarV2ItemTitle',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  variants: {
    unread: {
      true: {
        color: '$fontTitlesLabels',
        fontWeight: '500',
      },
    },
  } as const,
});

export const SidebarItemTitle = ({
  className: _className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemTitleFrame unread={unread || undefined} {...(props as any)} />
);
