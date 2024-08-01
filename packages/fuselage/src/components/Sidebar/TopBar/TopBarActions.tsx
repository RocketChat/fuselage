import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { SidebarActions } from '../SidebarActions';

type TopBarActionsProps = ComponentProps<typeof SidebarActions>;

export const TopBarActions = forwardRef(function TopBarActions(
  props: TopBarActionsProps,
  ref: Ref<HTMLDivElement>
) {
  return <SidebarActions ref={ref} {...props} />;
});
