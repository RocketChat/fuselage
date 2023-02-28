import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type SidebarItemSubtitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemSubtitle = ({
  className,
  ...props
}: SidebarItemSubtitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${className}`}
    {...props}
  />
);

export default SidebarItemSubtitle;
