import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const SidepanelListFrame = styled(RcxView, {
  name: 'SidepanelList',
  role: 'list',
  paddingBlock: '$x8',
});

export type SidepanelListProps = HTMLAttributes<HTMLDivElement>;

const SidepanelList = forwardRef<HTMLDivElement, SidepanelListProps>(
  function SidepanelList(props, ref) {
    return <SidepanelListFrame ref={ref} {...(props as any)} />;
  },
);

export default SidepanelList;
