import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../primitives';

const SidebarSectionTitleFrame = styled(RcxText, {
  name: 'SidebarSectionTitle',
  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  color: '$fontDefault',
});

export type SidebarSectionTitleProps = {
  children?: ReactNode;
};

export const SidebarSectionTitle = (props: SidebarSectionTitleProps) => (
  <SidebarSectionTitleFrame {...(props as any)} />
);

const SidebarSectionFrame = styled(RcxView, {
  name: 'SidebarSection',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBlock: 8,
  paddingInline: 16,
});

export type SidebarSectionProps = {
  children?: ReactNode;
};

export const SidebarSection = Object.assign(
  (props: SidebarSectionProps) => <SidebarSectionFrame {...(props as any)} />,
  {
    Title: SidebarSectionTitle,
  },
);
