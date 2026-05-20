import type { ReactNode } from 'react';

export type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Sidebar TopBar and ToolBox.
 */
export const TopBar = ({ className, ...props }: TopBarProps) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
