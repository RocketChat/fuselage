import type { ReactNode } from 'react';

export type TopBarV2Props = {
  children?: ReactNode;
  className?: string;
};

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
