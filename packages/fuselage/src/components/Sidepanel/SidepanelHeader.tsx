import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import SidepanelDivider from './SidepanelDivider';

const SidepanelHeaderWrapper = styled(RcxView, {
  name: 'SidepanelHeaderWrapper',
});

const SidepanelHeaderFrame = styled(RcxView, {
  name: 'SidepanelHeader',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$x8',
  height: 44,
  paddingInline: '$x16',
});

export type SidepanelHeaderProps = HTMLAttributes<HTMLDivElement>;

const SidepanelHeader = (props: SidepanelHeaderProps) => (
  <SidepanelHeaderWrapper>
    <SidepanelHeaderFrame {...(props as any)} />
    <SidepanelDivider />
  </SidepanelHeaderWrapper>
);

export default SidepanelHeader;
