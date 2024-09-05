import type { Keys as IconKeys } from '@rocket.chat/icons';
import { isValidElement, type ComponentProps, type ReactElement } from 'react';

import { Icon } from '../../Icon';

type SideBarItemIconProps = Omit<ComponentProps<typeof Icon>, 'name'> & {
  icon: IconKeys | ReactElement;
  highlighted?: boolean;
};

export const SideBarItemIcon = ({
  icon,
  className,
  highlighted,
  ...props
}: SideBarItemIconProps) => (
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
