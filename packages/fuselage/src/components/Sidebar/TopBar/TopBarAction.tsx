import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

/** @public */
export type TopBarActionProps = SidebarActionProps;

/** @public */
const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <SidebarAction ref={ref} {...props} />;
});

export default TopBarAction;
