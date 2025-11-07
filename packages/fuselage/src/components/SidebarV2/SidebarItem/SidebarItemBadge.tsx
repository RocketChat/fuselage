import type { ComponentProps } from 'react';

import { Badge } from '../../Badge/index.js';

export const SidebarItemBadge = ({
  className,
  ...props
}: ComponentProps<typeof Badge>) => (
  <Badge
    className={['rcx-box rcx-box--full rcx-sidebar-v2-item__badge', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
