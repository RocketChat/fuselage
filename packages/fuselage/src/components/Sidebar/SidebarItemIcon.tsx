import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';

type SidebarItemIconProps = {
  children?: ReactNode;
  className?: string;
  highlighted?: boolean;
  icon: ComponentProps<typeof Icon>['name'];
} & Omit<AllHTMLAttributes<HTMLElement>, 'name' | 'is'>;

const SidebarItemIcon = ({
  highlighted,
  children,
  icon,
  className: _className,
  ...props
}: SidebarItemIconProps) => (
  <div
    className={[
      'rc-box rcx-box--full rcx-sidebar-item__icon',
      highlighted && 'rcx-sidebar-item__icon--highlighted',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children || <Icon size='x16' name={icon} {...props} />}
  </div>
);

export default SidebarItemIcon;
