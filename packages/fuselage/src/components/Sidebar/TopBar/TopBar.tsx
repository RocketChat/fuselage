import type { ReactNode } from 'react';

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Sidebar TopBar and ToolBox.
 *
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export const TopBar = ({ className, ...props }: TopBarProps) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
