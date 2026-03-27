import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const SidepanelSectionFrame = styled(RcxView, {
  name: 'SidepanelSection',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$x8',
  padding: '$x16',
});

export type SidepanelSectionProps = HTMLAttributes<HTMLDivElement>;

const SidepanelSection = (props: SidepanelSectionProps) => (
  <SidepanelSectionFrame {...(props as any)} />
);

export default SidepanelSection;
