import type { HTMLAttributes } from 'react';

export const SidepanelHeaderTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-header__title', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
