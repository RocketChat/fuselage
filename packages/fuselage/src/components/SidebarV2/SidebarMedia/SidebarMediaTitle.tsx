import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

const SidebarMediaTitleFrame = styled(RcxText, {
  name: 'SidebarV2MediaTitle',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  flexGrow: 1,
  paddingBlockEnd: 4,
  paddingInline: 16,
  // @ts-ignore
  textAlign: 'center',
  overflowWrap: 'normal',
});

export const SidebarMediaTitle = ({
  className: _className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarMediaTitleFrame {...(props as any)} />
);
