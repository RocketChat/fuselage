import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarAccordion = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-accordion rcx-box--animated', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div className='rcx-sidebar-v2-accordion__wrapper'>{children}</div>
  </div>
);
