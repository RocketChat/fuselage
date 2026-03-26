import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText, RcxView } from '../../primitives';

export type SidebarFooterProps = {
  children?: ReactNode;
  elevated?: boolean;
};

const SidebarFooterFrame = styled(RcxView, {
  name: 'SidebarFooter',
  paddingBlock: 4,
  variants: {
    elevated: {
      true: {
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  } as const,
});

export const SidebarFooter = ({ elevated, ...props }: SidebarFooterProps) => (
  <SidebarFooterFrame elevated={elevated || undefined} {...(props as any)} />
);

export type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

const SidebarFooterHighlightFrame = styled(RcxText, {
  name: 'SidebarFooterHighlight',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  display: 'flex',
  justifyContent: 'center',
  paddingBlockStart: 4,
  color: '$fontAnnotation',
  overflowWrap: 'normal',
});

export const SidebarFooterHighlight = ({
  ...props
}: SidebarFooterHighlightProps) => (
  <SidebarFooterHighlightFrame {...(props as any)} />
);
