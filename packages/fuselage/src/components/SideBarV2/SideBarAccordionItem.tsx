import type { ComponentProps } from 'react';
import React from 'react';

import { SideBarCollapser } from './components/SideBarCollapser';

type SideBarAccordionItemProps = ComponentProps<typeof SideBarCollapser>;

export const SideBarAccordionItem = function Item(
  props: SideBarAccordionItemProps
) {
  return (
    <SideBarCollapser {...props} className='rcx-sidebar-v2__accordion-item' />
  );
};
