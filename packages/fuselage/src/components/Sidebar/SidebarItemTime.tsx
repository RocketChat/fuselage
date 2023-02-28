import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemTimeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemTime = ({ className, ...props }: SidebarItemTimeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__time ${className}`}
    {...props}
  />
);

export default SidebarItemTime;
