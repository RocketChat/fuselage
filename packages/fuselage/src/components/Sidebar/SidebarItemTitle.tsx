import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemTitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemTitle = ({
  className = '',
  ...props
}: SidebarItemTitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__title ${className}`}
    {...props}
  />
);

export default SidebarItemTitle;
