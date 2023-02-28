import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import SidebarItemContainer from './SidebarItemContainer';

type SidebarItemAvatarProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

export default SidebarItemAvatar;
