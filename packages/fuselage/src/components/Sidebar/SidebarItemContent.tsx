import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemContentProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemContent = ({
  className = '',
  ...props
}: SidebarItemContentProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${className}`}
    {...props}
  />
);

export default SidebarItemContent;
