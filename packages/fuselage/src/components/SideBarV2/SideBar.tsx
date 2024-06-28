import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBar = ({
  collapsed,
  className,
  ...props
}: { collapsed?: boolean } & HTMLAttributes<HTMLElement>) => (
  <nav
    className={[
      'rcx-sidebar-v2',
      'rcx-box--animated',
      collapsed && 'rcx-sidebar-v2--collapsed',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
