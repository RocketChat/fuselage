import React, { FC } from 'react';

export const SidebarFooter: FC = ({ ...props }) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-footer' {...props} />
);

export const SidebarFooterHighlight: FC = ({ ...props }) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);
