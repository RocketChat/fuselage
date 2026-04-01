import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

import { SidebarGroupTitle } from './SidebarGroupTitle';
import { useCollapse } from './hooks/useCollapse';

type SidebarCollapseGroupProps = {
  expanded?: boolean;
  defaultExpanded?: boolean;
  tabIndex?: number;
  title: string;
  badge?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CollapseGroupFrame = styled(RcxView, {
  name: 'SidebarV2CollapseGroup',
  tag: 'section',
  display: 'flex',
  flexDirection: 'column',
  // @ts-ignore
  flexWrap: 'nowrap',
});

const CollapseGroupPanel = styled(RcxView, {
  name: 'SidebarV2CollapseGroupPanel',
  // @ts-ignore
  visibility: 'hidden',
  overflow: 'hidden',
  height: 0,
  margin: 0,
  padding: 0,
  // @ts-ignore
  listStyle: 'none',
  variants: {
    expanded: {
      true: {
        // @ts-ignore
        visibility: 'visible',
        flexGrow: 1,
        height: '100%',
        // collapse-group panel has padding:none when expanded, unlike accordion
        paddingBlock: 0,
      },
    },
  } as const,
});

export const SidebarCollapseGroup = forwardRef<
  HTMLDivElement,
  SidebarCollapseGroupProps
>(
  (
    {
      expanded: propExpanded,
      defaultExpanded,
      tabIndex,
      children,
      badge,
      title,
      ...props
    }: SidebarCollapseGroupProps,
    ref,
  ) => {
    const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse(
      {
        expanded: propExpanded,
        defaultExpanded,
        tabIndex,
      },
    );

    return (
      <CollapseGroupFrame {...(props as any)}>
        <SidebarGroupTitle
          expanded={expanded}
          title={title}
          titleId={titleId}
          badge={badge}
          barProps={barProps}
          role='button'
        />
        <CollapseGroupPanel
          role='list'
          ref={ref}
          expanded={panelExpanded || undefined}
          id={panelId}
        >
          {children}
        </CollapseGroupPanel>
      </CollapseGroupFrame>
    );
  },
);
