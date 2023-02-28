import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import SidebarAction from './SidebarAction';

type TopBarActionProps = ComponentProps<typeof SidebarAction>;

const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: Ref<HTMLElement>
) {
  return <SidebarAction ref={ref} {...props} />;
});

export default TopBarAction;
