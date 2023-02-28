import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemMenu = (props: SidebarItemMenuProps) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wrapper'
    {...props}
  />
);

export default SidebarItemMenu;
