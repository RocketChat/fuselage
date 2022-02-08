import React, { ReactNode } from 'react';

type SidebarSectionTitleProps = {
  children?: ReactNode;
};

export const SidebarSectionTitle = (props: SidebarSectionTitleProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-title' {...props} />
);

type SidebarSectionProps = {
  children?: ReactNode;
};

export const SidebarSection = (props: SidebarSectionProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-section' {...props} />
);

export default Object.assign(SidebarSection, {
  Title: SidebarSectionTitle,
});
