import type { ReactNode } from 'react';

/**
 * @deprecated Use `SidebarV2GroupTitleProps` instead.
 */
export type SidebarSectionTitleProps = {
  children?: ReactNode;
};

/**
 * @deprecated Use `SidebarV2GroupTitle` instead.
 */
export const SidebarSectionTitle = (props: SidebarSectionTitleProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-title' {...props} />
);

/**
 * @deprecated Use `SidebarV2Section` instead.
 */
export type SidebarSectionProps = {
  children?: ReactNode;
};

/**
 * @deprecated Use `SidebarV2Section` instead.
 */
export const SidebarSection = (props: SidebarSectionProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-section' {...props} />
);
