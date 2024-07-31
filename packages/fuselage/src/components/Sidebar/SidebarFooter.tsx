import type { ReactNode } from 'react';

/** @public */
export type SidebarFooterProps = {
  children?: ReactNode;
  elevated?: boolean;
};

/** @public */
const SidebarFooter = ({ elevated, ...props }: SidebarFooterProps) => (
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

export default SidebarFooter;
