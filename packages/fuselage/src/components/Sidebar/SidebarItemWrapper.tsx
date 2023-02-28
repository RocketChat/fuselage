import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemWrapperProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemWrapper = ({
  className = '',
  ...props
}: SidebarItemWrapperProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${className}`}
    {...props}
  />
);

export default SidebarItemWrapper;
