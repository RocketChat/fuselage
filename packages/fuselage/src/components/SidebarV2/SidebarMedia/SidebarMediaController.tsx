import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../../primitives';
import { SidebarButtonGroup } from '../SidebarButtonGroup';

const SidebarMediaControllerFrame = styled(RcxView, {
  name: 'SidebarV2MediaController',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: 16,
});

const SidebarMediaControllerLabel = styled(RcxText, {
  name: 'SidebarV2MediaControllerLabel',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  overflowWrap: 'normal',
});

export const SidebarMediaController = ({
  className: _className,
  label,
  children,
  ...props
}: { label?: string } & HTMLAttributes<HTMLDivElement>) => (
  <SidebarMediaControllerFrame>
    <SidebarMediaControllerLabel>{label}</SidebarMediaControllerLabel>
    <SidebarButtonGroup small align='end' {...(props as any)}>
      {children}
    </SidebarButtonGroup>
  </SidebarMediaControllerFrame>
);
