import React, { ReactNode } from 'react';

type SidebarFooterProps = {
  children?: React.ReactNode;
  elevated?: boolean;
};

export const SidebarFooter = ({ elevated, ...props }: SidebarFooterProps) => (
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

type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

export const SidebarFooterHighlight = ({
  ...props
}: SidebarFooterHighlightProps) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);
