import type { AllHTMLAttributes, ReactNode } from 'react';

import { IconButton } from '../Button';

export type SidebarV2BannerVariant =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export type SidebarV2BannerVariantPlacement = 'center' | 'top';

export type SidebarV2BannerProps = {
  title?: ReactNode;
  linkText?: string;
  linkProps?: AllHTMLAttributes<HTMLAnchorElement>;
  onClick?: () => void;
  variant?: SidebarV2BannerVariant;
  onClose?: () => void;
  /**
   * Vertical alignment of the close button / addon column. Use `'top'` to align
   * the close button with the banner header (title) instead of centering it on
   * the whole banner — useful when the banner has taller content below the title.
   * @default 'center'
   */
  closePlacement?: SidebarV2BannerVariantPlacement;
  children?: ReactNode;
  addon?: ReactNode;
};

export const SidebarBanner = ({
  title,
  linkText,
  linkProps,
  variant = 'default',
  closePlacement = 'center',
  addon,
  onClose,
  children,
  ...props
}: SidebarV2BannerProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-banner',
      `rcx-sidebar-v2-banner--${variant}`,
      closePlacement === 'top' && 'rcx-sidebar-v2-banner--close-top',
    ]
      .filter(Boolean)
      .join(' ')}
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
          {...linkProps}
        >
          {linkText}
        </a>
      )}
      {children}
    </div>
    {(addon || onClose) && (
      <div className='rcx-box rcx-box--full rcx-sidebar-v2-banner__addon'>
        {addon}
        {onClose && <IconButton onClick={onClose} tiny icon='cross' />}
      </div>
    )}
  </div>
);
