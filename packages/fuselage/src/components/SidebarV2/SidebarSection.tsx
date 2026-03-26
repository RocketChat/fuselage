import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

import { SidebarDivider } from './SidebarDivider';

const SidebarSectionFrame = styled(RcxView, {
  name: 'SidebarV2Section',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 44,
  paddingInline: 16,
  gap: 8,
});

export const SidebarSection = (props: HTMLAttributes<HTMLDivElement>) => (
  <RcxView>
    <SidebarSectionFrame {...(props as any)} />
    <SidebarDivider />
  </RcxView>
);
