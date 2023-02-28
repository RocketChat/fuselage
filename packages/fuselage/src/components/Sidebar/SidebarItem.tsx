import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react';
import React from 'react';

import type Box from '../Box';

type SidebarItemProps = {
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  featured?: boolean;
  is?: ComponentProps<typeof Box>['is'];
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const SidebarItem = ({
  selected,
  highlighted,
  clickable,
  featured,
  is: Tag = 'div',
  children,
  ...props
}: SidebarItemProps) => (
  <Tag
    className={[
      'rc-box rcx-box--full rcx-sidebar-item',
      highlighted && 'rcx-sidebar-item--highlighted',
      clickable && 'rcx-sidebar-item--clickable',
      selected && 'rcx-sidebar-item--selected',
      featured && 'rcx-sidebar-item--featured',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div
      className='rcx-box rcx-box--full rcx-sidebar-item__wrapper'
      children={children}
    />
  </Tag>
);

export default SidebarItem;
