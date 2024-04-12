import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarAccordion = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-sidebar-v2-accordion rcx-box--animated',
      className && className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
