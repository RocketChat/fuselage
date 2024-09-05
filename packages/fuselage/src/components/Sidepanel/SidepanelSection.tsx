import type { HTMLAttributes } from 'react';

export const SidepanelSection = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section', className].filter(Boolean).join(' ')}
    {...props}
  />
);
