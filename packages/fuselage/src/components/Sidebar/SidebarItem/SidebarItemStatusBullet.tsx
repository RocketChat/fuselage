import type { StatusBulletProps } from '../../StatusBullet';
import { StatusBullet } from '../../StatusBullet';

export const SidebarItemStatusBullet = (props: StatusBulletProps) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-v2-item__status-bullet'>
    <StatusBullet {...props} />
  </div>
);
