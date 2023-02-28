import type { ReactNode } from 'react';
import React from 'react';

type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

const SidebarFooterHighlight = ({ ...props }: SidebarFooterHighlightProps) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);

export default SidebarFooterHighlight;
