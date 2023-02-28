import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

export default SidebarItemContainer;
