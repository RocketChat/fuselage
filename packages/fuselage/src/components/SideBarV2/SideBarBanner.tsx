import type { ReactNode } from 'react';
import React from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SideBarBannerProps = {
  text?: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

export const SideBarBanner = ({
  text,
  description,
  onClick,
  variant = 'default',
  addon,
  onClose,
  children,
}: SideBarBannerProps) => (
  <div
    className={`rcx-box rcx-box--full rcx-sidebar-v2-banner rcx-sidebar-v2-banner--${variant}`}
  >
    <div>
      {text && <div className='rcx-sidebar-v2-banner--text'>{text}</div>}
      {description && (
        <div
          className={[
            'rcx-sidebar-v2-banner--description',
            onClick && 'rcx-sidebar-v2-banner--description--clickable',
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
    <div className='rcx-sidebar-v2-banner__actions'>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </div>
  </div>
);
