import React from 'react';

type SidebarFooterProps = {
  children?: React.ReactNode;
  elevated?: boolean;
};

const SidebarFooter = ({ elevated, ...props }: SidebarFooterProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-footer',
      elevated && 'rcx-sidebar-footer--elevated',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

export default SidebarFooter;
