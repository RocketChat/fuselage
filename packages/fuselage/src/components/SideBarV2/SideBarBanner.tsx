import type { ReactNode } from 'react';
import React from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SideBarBannerProps = {
  title?: ReactNode;
  link?: string;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

export const SideBarBanner = ({
  title,
  link,
  onClick,
  variant = 'default',
  addon,
  onClose,
  children,
}: SideBarBannerProps) => (
  <div className={`rcx-sidebar-v2-banner rcx-sidebar-v2-banner--${variant}`}>
    <div className='rcx-sidebar-v2-banner__content'>
      {title && <h5 className='rcx-sidebar-v2-banner__title'>{title}</h5>}
      {link && (
        <div className='rcx-sidebar-v2-banner__link' onClick={onClick}>
          {link}
        </div>
      )}
      {children}
    </div>
    <div className='rcx-sidebar-v2-banner__addon'>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </div>
  </div>
);
