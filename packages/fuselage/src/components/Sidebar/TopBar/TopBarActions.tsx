import { forwardRef } from 'react';

import type { SidebarActionsProps } from '../SidebarActions';
import { SidebarActions } from '../SidebarActions';

type TopBarActionsProps = SidebarActionsProps;

export const TopBarActions = forwardRef<HTMLDivElement, TopBarActionsProps>(
  function TopBarActions(props, ref) {
    return <SidebarActions ref={ref} {...props} />;
  },
);
