import React, { FC } from 'react';

export const SidebarSectionTitle: FC = (props) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-title' {...props} />
);

export const SidebarSection: FC & {
  Title?: typeof SidebarSectionTitle;
} = (props) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-section' {...props} />
);

export default Object.assign(SidebarSection, {
  Title: SidebarSectionTitle,
});
