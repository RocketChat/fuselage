import type { Keys as Icons } from '@rocket.chat/icons';
import type { HTMLAttributes } from 'react';

import { Icon } from '../../Icon';

export const SidebarItemAction = ({
  children,
  className,
  icon = 'plus-small',
  ...props
}: {
  onClick: (e: Event) => void;
  icon?: Icons;
} & HTMLAttributes<HTMLDivElement>) => (
  <div
    role='button'
    tabIndex={0}
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item rcx-sidebar-v2-item__action',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <Icon name={icon} size='x20' />
    {children}
  </div>
);
