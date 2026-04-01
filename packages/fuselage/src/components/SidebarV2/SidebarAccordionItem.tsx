import type { HTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../primitives';
import { Chevron } from '../Chevron';

import { useCollapse } from './hooks/useCollapse';

export type SidebarAccordionItemProps = {
  children?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  title: ReactNode;
  noncollapsible?: boolean;
  badge?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const AccordionItemFrame = styled(RcxView, {
  name: 'SidebarV2AccordionItem',
  tag: 'section',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderBottomColor: '$strokeLight',
});

const AccordionItemBar = styled(RcxView, {
  name: 'SidebarV2AccordionItemBar',
  display: 'flex',
  flexDirection: 'row',
  // @ts-ignore
  flexWrap: 'nowrap',
  alignItems: 'center',
  minHeight: 24,
  position: 'sticky' as any,
  zIndex: 1,
  top: 0,
  paddingBlock: 12,
  paddingInlineEnd: 16,
  paddingInlineStart: 0,
  borderRadius: '$x2',
  backgroundColor: '$surfaceSidebar',
  // @ts-ignore
  columnGap: 4,
  cursor: 'pointer',
  focusable: true,
  hoverStyle: {
    backgroundColor: '$surfaceTint',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: '$fontDisabled',
        backgroundColor: '$surfaceDisabled',
      },
    },
  } as const,
});

const AccordionItemTitle = styled(RcxText, {
  name: 'SidebarV2AccordionItemTitle',
  tag: 'h5',
  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',
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

const AccordionItemPanel = styled(RcxView, {
  name: 'SidebarV2AccordionItemPanel',
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
        paddingBlock: 4,
        paddingBlockEnd: 8,
      },
    },
  } as const,
});

const SidebarAccordionItem = ({
  children,
  title,
  badge,
  noncollapsible,
  disabled,
  expanded: propExpanded,
  defaultExpanded,
  tabIndex,
  ...props
}: SidebarAccordionItemProps) => {
  const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse({
    expanded: propExpanded,
    defaultExpanded,
    tabIndex,
    disabled,
    noncollapsible,
  });

  return (
    <AccordionItemFrame {...(props as any)}>
      <AccordionItemBar
        role='button'
        disabled={disabled || undefined}
        {...(barProps as any)}
      >
        {!noncollapsible && (
          <Chevron size='x16' right={!expanded} />
        )}
        {title && (
          <AccordionItemTitle id={titleId}>
            {title}
          </AccordionItemTitle>
        )}
        {!expanded && badge && badge}
      </AccordionItemBar>
      <AccordionItemPanel
        expanded={panelExpanded || undefined}
        id={panelId}
      >
        {children}
      </AccordionItemPanel>
    </AccordionItemFrame>
  );
};

export default SidebarAccordionItem;
