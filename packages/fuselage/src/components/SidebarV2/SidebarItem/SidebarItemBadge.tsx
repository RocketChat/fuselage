import type { BadgeProps } from '../../Badge';
import { Badge } from '../../Badge';

export const SidebarItemBadge = ({ className, ...props }: BadgeProps) => (
  <Badge
    className={['rcx-box rcx-box--full rcx-sidebar-v2-item__badge', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
