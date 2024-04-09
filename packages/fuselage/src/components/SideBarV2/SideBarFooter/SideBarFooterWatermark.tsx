import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarFooterWatermark = ({
  children,
  ...props
}: { secondary?: boolean } & HTMLAttributes<HTMLElement>) => (
  <span className='rcx-sidebar-v2-footer__watermark' {...props}>
    {children}
  </span>
);
