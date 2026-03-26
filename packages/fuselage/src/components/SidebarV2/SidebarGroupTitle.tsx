import type { AriaAttributes, HTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxInteractive, RcxText, RcxView } from '../../primitives';
import { Chevron } from '../Chevron';

type SidebarGroupTitleProps = {
  expanded?: boolean;
  title?: string;
  titleId?: string;
  badge?: ReactNode;
  barProps?: AriaAttributes;
} & HTMLAttributes<HTMLDivElement>;

const GroupTitleBar = styled(RcxInteractive, {
  name: 'SidebarV2CollapseGroupBar',
  display: 'flex',
  flexDirection: 'row',
  // @ts-ignore
  flexWrap: 'nowrap',
  alignItems: 'center',
  minHeight: 24,
  paddingBlock: 7,
  paddingInline: 15,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  color: '$fontDefault',
  backgroundColor: '$surfaceSidebar',
  // @ts-ignore
  columnGap: 4,
  // @ts-ignore
  textAlign: 'start',
  hoverStyle: {
    backgroundColor: '$surfaceTint',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
});

const GroupTitleText = styled(RcxText, {
  name: 'SidebarV2CollapseGroupTitle',
  tag: 'h4',
  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  overflowWrap: 'normal',
});

export const SidebarGroupTitle = ({
  title,
  titleId,
  badge,
  barProps,
  expanded,
  ...props
}: SidebarGroupTitleProps) => (
  <GroupTitleBar {...(barProps as any)} {...(props as any)}>
    {expanded !== undefined && <Chevron size='x20' right={!expanded} />}
    {title && <GroupTitleText id={titleId}>{title}</GroupTitleText>}
    {!expanded && badge && badge}
  </GroupTitleBar>
);
