import type { ReactNode } from 'react';

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export type TopBarV2Props = {
  children?: ReactNode;
  className?: string;
};

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export const TopBarV2 = ({ className, ...props }: TopBarV2Props) => (
  <div
    className={[
      'rc-box rc-box--full rcx-sidebar-topbar-v2 rcx-sidebar-topbar-v2',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
