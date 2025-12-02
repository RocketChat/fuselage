import type { ReactNode } from 'react';

export type SidebarFooterProps = {
  children?: ReactNode;
  elevated?: boolean;
};

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

export type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

export const SidebarFooterHighlight = ({
  ...props
}: SidebarFooterHighlightProps) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);
