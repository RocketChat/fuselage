import type { HTMLAttributes } from 'react';
import React from 'react';

import { SideBarButtonGroup } from '../SideBarButtonGroup';

export const SideBarMediaController = ({
  className,
  label,
  children,
  ...props
}: { label?: string } & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-media__controller', className]
      .filter(Boolean)
      .join(' ')}
  >
    <div className='rcx-sidebar-v2-media__controller__label'>{label}</div>
    <SideBarButtonGroup small align='end' {...props}>
      {children}
    </SideBarButtonGroup>
  </div>
);
