import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

export const SideBarItemIcon = ({
  className,
  ...props
}: ComponentProps<typeof Icon>) => (
  <Icon
    {...props}
    className={['rcx-sidebar-v2-item__icon', className && className]
      .filter(Boolean)
      .join(' ')}
  />
);
