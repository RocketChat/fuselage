import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const SidepanelFrame = styled(RcxView, {
  name: 'Sidepanel',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  color: '$fontDefault',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  backgroundColor: '$surfaceSidebar',
});

export type SidepanelProps = HTMLAttributes<HTMLDivElement>;

const Sidepanel = (props: SidepanelProps) => (
  <SidepanelFrame {...(props as any)} />
);

export default Sidepanel;
