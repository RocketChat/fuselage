import type { HTMLAttributes } from 'react';
import React from 'react';

import { appendClassName } from '../../../helpers/appendClassName';
import { patchChildren } from '../../../helpers/patchChildren';

export const SideBarItemMenu = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className='rcx-sidebar-v2-item__menu-wrapper rcx-box--animated'
    {...props}
  >
    {patchChildren(
      <span className='rcx-sidebar-v2-item__menu'>{children}</span>,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-sidebar-v2-item__menu'
        ),
      })
    )}
  </div>
);
