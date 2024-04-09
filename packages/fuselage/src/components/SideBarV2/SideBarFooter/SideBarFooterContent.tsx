import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarFooterContent = ({
  children,
  secondary,
  ...props
}: { secondary?: boolean } & HTMLAttributes<HTMLElement>) => (
  <span
    className={`rcx-sidebar-v2-footer__content ${
      secondary ? 'rcx-sidebar-v2-footer__content--secondary' : ''
    }`}
    {...props}
  >
    {children}
  </span>
);
