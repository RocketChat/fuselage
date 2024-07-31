import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = SidebarActionProps;

export const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <SidebarAction ref={ref} {...props} />;
});
