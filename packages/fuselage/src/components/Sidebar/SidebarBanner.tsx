import type { ReactNode } from 'react';
import React from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SidebarBannerProps = {
  text?: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
};

export const SidebarBanner = ({
  text,
  description,
  onClick,
  variant = 'default',
  onClose,
  children,
}: SidebarBannerProps) => (
  <div
    className={`rcx-box rcx-box--full rcx-sidebar-banner rcx-sidebar-banner--${variant}`}
  >
    <div>
      {text && <div className='rcx-sidebar-banner--text'>{text}</div>}
      {description && (
        <div
          className={[
            'rcx-sidebar-banner--description',
            onClick && 'rcx-sidebar-banner--description--clickable',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={onClick}
        >
          {description}
        </div>
      )}
      {children}
    </div>
    {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
  </div>
);
