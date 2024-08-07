import type { ComponentProps } from 'react';
import React from 'react';

import { Badge } from '../../Badge';

export const SideBarItemBadge = ({
  className,
  ...props
}: ComponentProps<typeof Badge>) => (
  <Badge
    className={['rcx-sidebar-v2-item__badge', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
