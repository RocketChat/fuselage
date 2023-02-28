import type { ReactNode } from 'react';
import React from 'react';

type SidebarSectionTitleProps = {
  children?: ReactNode;
};

const SidebarSectionTitle = (props: SidebarSectionTitleProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-title' {...props} />
);

export default SidebarSectionTitle;
