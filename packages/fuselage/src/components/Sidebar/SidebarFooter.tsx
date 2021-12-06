import React, { FC } from 'react';

export const SidebarFooter: FC<{
  elevated?: boolean;
}> = ({ elevated, ...props }) => (
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

export const SidebarFooterHighlight: FC = ({ ...props }) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);
