import { forwardRef } from 'react';

import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = SidebarActionProps;

export const TopBarAction = forwardRef<HTMLElement, TopBarActionProps>(
  function TopBarAction(props, ref) {
    return <SidebarAction ref={ref} {...props} />;
  },
);
