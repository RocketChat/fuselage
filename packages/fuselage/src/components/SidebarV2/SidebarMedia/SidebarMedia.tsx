import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

const SidebarMediaFrame = styled(RcxView, {
  name: 'SidebarV2Media',
  paddingBlock: 8,
  color: '$fontTitlesLabels',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeLight',
  backgroundColor: '$surfaceSidebar',
});

export const SidebarMedia = ({
  className: _className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarMediaFrame {...(props as any)} />
);
