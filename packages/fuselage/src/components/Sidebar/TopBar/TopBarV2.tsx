import type { ReactNode } from 'react';

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

export const TopBarV2 = ({ className, ...props }: TopBarProps) => (
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
