import type { AllHTMLAttributes, ReactNode } from 'react';

import { IconButton } from '../Button';

type VariantType = 'default' | 'info' | 'success' | 'warning' | 'danger';

type SidebarBannerProps = {
  title?: ReactNode;
  linkText?: string;
  linkProps?: AllHTMLAttributes<HTMLAnchorElement>;
  onClick?: () => void;
  variant?: VariantType;
  onClose?: () => void;
  children?: ReactNode;
  addon?: ReactNode;
};

export const SidebarBanner = ({
  title,
  linkText,
  linkProps,
  variant = 'default',
  addon,
  onClose,
  children,
  ...props
}: SidebarBannerProps) => (
  <div
    className={`rcx-box rcx-box--full rcx-sidebar-v2-banner rcx-sidebar-v2-banner--${variant}`}
    {...props}
  >
    <div className='rcx-box rcx-box--full rcx-sidebar-v2-banner__content'>
      {title && (
        <h5 className='rcx-box rcx-box--full rcx-sidebar-v2-banner__title'>
          {title}
        </h5>
      )}
      {linkText && (
        <a
          className='rcx-box rcx-box--full rcx-sidebar-v2-banner__link'
          tabIndex={0}
          {...linkProps}
        >
          {linkText}
        </a>
      )}
      {children}
    </div>
    <div className='rcx-box rcx-box--full rcx-sidebar-v2-banner__addon'>
      {addon}
      {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
    </div>
  </div>
);
