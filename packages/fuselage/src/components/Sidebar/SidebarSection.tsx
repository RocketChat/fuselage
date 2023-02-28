import type { ReactNode } from 'react';
import React from 'react';

type SidebarSectionProps = {
  children?: ReactNode;
};

const SidebarSection = (props: SidebarSectionProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-section' {...props} />
);

export default SidebarSection;
