import type { HTMLAttributes } from 'react';

export const SidepanelSectionAction = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section__action', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
