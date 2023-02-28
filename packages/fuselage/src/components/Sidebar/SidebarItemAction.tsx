import type { ComponentProps } from 'react';
import React from 'react';

import SidebarAction from './SidebarAction';

type SidebarItemActionProps = ComponentProps<typeof SidebarAction>;

const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

export default SidebarItemAction;
