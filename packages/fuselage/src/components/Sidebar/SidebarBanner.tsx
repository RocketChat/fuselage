import React from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SidebarBannerProps = {
  title: string;
  actionText?: string;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
};

export const SidebarBanner = ({
  title,
  actionText,
  onClick,
  variant = 'default',
  onClose,
}: SidebarBannerProps) => (
  <div
    className={`rcx-box rcx-box--full rcx-sidebar-banner rcx-sidebar-banner--${variant}`}
  >
    <div>
      <div className='rcx-sidebar-banner--title'>{title}</div>
      {actionText && (
        <a className='rcx-sidebar-banner--action' onClick={onClick}>
          {actionText}
        </a>
      )}
    </div>
    {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
  </div>
);
