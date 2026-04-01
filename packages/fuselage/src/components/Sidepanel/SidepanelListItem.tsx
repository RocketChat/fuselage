import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const SidepanelListItemFrame = styled(RcxView, {
  name: 'SidepanelListItem',
  role: 'listitem',
});

export type SidepanelListItemProps = HTMLAttributes<HTMLDivElement>;

const SidepanelListItem = forwardRef<HTMLDivElement, SidepanelListItemProps>(
  function SidepanelListItem(props, ref) {
    return <SidepanelListItemFrame ref={ref} {...(props as any)} />;
  },
);

export default SidepanelListItem;
