import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { SidebarActionsProps } from '../SidebarActions';
import { SidebarActions } from '../SidebarActions';

type TopBarActionsProps = SidebarActionsProps;

export const TopBarActions = forwardRef(function TopBarActions(
  props: TopBarActionsProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <SidebarActions ref={ref} {...props} />;
});
