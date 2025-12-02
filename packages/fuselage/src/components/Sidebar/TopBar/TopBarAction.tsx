import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = SidebarActionProps;

export const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: Ref<HTMLElement>,
) {
  return <SidebarAction ref={ref} {...props} />;
});
