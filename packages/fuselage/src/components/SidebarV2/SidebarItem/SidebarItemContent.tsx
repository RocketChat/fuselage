import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';

const SidebarItemContentFrame = styled(RcxText, {
  name: 'SidebarV2ItemContent',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexGrow: 1,
  flexShrink: 1,
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

export const SidebarItemContent = ({
  className: _className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemContentFrame unread={unread || undefined} {...(props as any)} />
);
