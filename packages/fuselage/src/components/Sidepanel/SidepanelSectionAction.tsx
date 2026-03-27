import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const SidepanelSectionActionFrame = styled(RcxView, {
  name: 'SidepanelSectionAction',
});

export type SidepanelSectionActionProps = HTMLAttributes<HTMLDivElement>;

const SidepanelSectionAction = (props: SidepanelSectionActionProps) => (
  <SidepanelSectionActionFrame {...(props as any)} />
);

export default SidepanelSectionAction;
