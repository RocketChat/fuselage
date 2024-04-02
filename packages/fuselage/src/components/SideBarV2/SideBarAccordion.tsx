import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import React from 'react';

type SideBarAccordionProps = {
  animated?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function SideBarAccordion(
  props: SideBarAccordionProps
): ReactElement<SideBarAccordionProps> {
  return (
    <div className='rcx-sidebar-v2__accordion rcx-box--animated' {...props} />
  );
}
