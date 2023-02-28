import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemBadgeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemBadge = ({ className, ...props }: SidebarItemBadgeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__badge ${className}`}
    {...props}
  />
);

export default SidebarItemBadge;
