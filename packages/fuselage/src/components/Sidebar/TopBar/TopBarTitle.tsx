import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';

type TopBarTitleProps = {
  children?: ReactNode;
};

const TopBarTitleFrame = styled(RcxText, {
  name: 'SidebarTopBarTitle',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  color: '$fontTitlesLabels',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
});

export const TopBarTitle = (props: TopBarTitleProps) => (
  <TopBarTitleFrame {...(props as any)} />
);
