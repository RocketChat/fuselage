import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

const SidebarItemTimestampFrame = styled(RcxText, {
  name: 'SidebarV2ItemTimestamp',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  overflowWrap: 'normal',
  variants: {
    unread: {
      true: {
        color: '$fontTitlesLabels',
        fontWeight: '500',
      },
    },
  } as const,
});

export const SidebarItemTimestamp = ({
  className: _className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemTimestampFrame unread={unread || undefined} {...(props as any)} />
);
