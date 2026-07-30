import type { ReactNode } from 'react';

/**
 * @deprecated Use `SidebarV2Footer` instead.
 */
export type SidebarFooterProps = {
  children?: ReactNode;
  elevated?: boolean;
};

/**
 * @deprecated Use `SidebarV2Footer` instead.
 */
export const SidebarFooter = ({ elevated, ...props }: SidebarFooterProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-footer',
      elevated && 'rcx-sidebar-footer--elevated',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2FooterContent` instead.
 */
export type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

/**
 * @deprecated Use `SidebarV2FooterContent` instead.
 */
export const SidebarFooterHighlight = ({
  ...props
}: SidebarFooterHighlightProps) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);
