import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

export const SideBarItemIcon = ({
  className,
  ...props
}: ComponentProps<typeof Icon>) => (
  <Icon
    className={['rcx-sidebar-v2-item__icon', className]
      .filter(Boolean)
      .join(' ')}
    size='x20'
    {...props}
  />
);
