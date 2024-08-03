import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = ComponentProps<typeof SidebarAction>;

export const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: Ref<HTMLElement>
) {
  return <SidebarAction ref={ref} {...props} />;
});
