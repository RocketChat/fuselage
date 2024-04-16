import type { ReactNode } from 'react';
import React from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SideBarBannerProps = {
  title?: ReactNode;
  link?: string;
  onClick?: () => void;
  href?: string;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

export const SideBarBanner = ({
  title,
  link,
  onClick,
  href,
  variant = 'default',
  addon,
  onClose,
  children,
  ...props
}: SideBarBannerProps) => (
  <div
    className={`rcx-sidebar-v2-banner rcx-sidebar-v2-banner--${variant}`}
    {...props}
  >
    <div className='rcx-sidebar-v2-banner__content'>
      {title && <h5 className='rcx-sidebar-v2-banner__title'>{title}</h5>}
      {link && (
        <a
          className='rcx-sidebar-v2-banner__link'
          onClick={onClick}
          href={href}
          tabIndex={0}
        >
          {link}
        </a>
      )}
      {children}
    </div>
    <div className='rcx-sidebar-v2-banner__addon'>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </div>
  </div>
);
