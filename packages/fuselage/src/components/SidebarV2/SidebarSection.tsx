import type { HTMLAttributes } from 'react';

import { SideBarDivider } from './SidebarDivider';

export const SideBarSection = (props: HTMLAttributes<HTMLDivElement>) => (
  <div>
    <div className='rcx-box rcx-box--full rcx-sidebar-v2-section' {...props} />
    <SideBarDivider />
  </div>
);
