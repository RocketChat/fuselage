import type { ComponentProps } from 'react';
import React from 'react';

import { SideBarCollapser } from './components/SideBarCollapser';

type SideBarCollapseGroupProps = ComponentProps<typeof SideBarCollapser>;

export const SideBarCollapseGroup = function Item(
  props: SideBarCollapseGroupProps
) {
  return (
    <SideBarCollapser {...props} className='rcx-sidebar-v2__collapse-group' />
  );
};
