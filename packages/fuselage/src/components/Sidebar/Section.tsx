import type { ReactNode } from 'react';

export type SidebarSectionTitleProps = {
  children?: ReactNode;
};

export const SidebarSectionTitle = (props: SidebarSectionTitleProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-title' {...props} />
);

export type SidebarSectionProps = {
  children?: ReactNode;
};

export const SidebarSection = Object.assign(
  (props: SidebarSectionProps) => (
    <div className='rcx-box rcx-box--full rcx-sidebar-section' {...props} />
  ),
  {
    Title: SidebarSectionTitle,
  },
);
