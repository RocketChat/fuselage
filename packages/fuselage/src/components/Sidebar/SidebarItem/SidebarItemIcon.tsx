import type { Keys as IconKeys } from '@rocket.chat/icons';
import { isValidElement, type ReactElement } from 'react';

import { Icon, type IconProps } from '../../Icon';

export type SidebarV2ItemIconProps = Omit<IconProps, 'name'> & {
  icon: IconKeys | ReactElement<any>;
  highlighted?: boolean;
};

export const SidebarItemIcon = ({
  icon,
  className,
  highlighted,
  ...props
}: SidebarV2ItemIconProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item__icon',
      highlighted && 'rcx-sidebar-v2-item__icon--highlighted',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {isValidElement(icon) ? (
      icon
    ) : (
      <Icon name={icon as IconKeys} size='x20' {...props} />
    )}
  </div>
);
