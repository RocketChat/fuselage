import type { HTMLAttributes } from 'react';

export const Sidepanel = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel', className].filter(Boolean).join(' ')}
    {...props}
  />
);
