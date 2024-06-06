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
  addon?: ReactNode;
};

export const SidebarBanner = ({
  text,
  description,
  onClick,
  variant = 'default',
  addon,
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
          role='link'
          tabIndex={0}
          className={[
            'rcx-sidebar-banner--description',
            onClick && 'rcx-sidebar-banner--description--clickable',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={onClick}
          onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
        >
          {description}
        </div>
      )}
      {children}
    </div>
    <div className='rcx-sidebar-banner__actions'>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </div>
  </div>
);
