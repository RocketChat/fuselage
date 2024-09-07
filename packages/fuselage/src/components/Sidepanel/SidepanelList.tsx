import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export const SidepanelList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidepanelList({ className, ...props }, ref) {
  return (
    <div
      role='list'
      ref={ref}
      className={['rcx-sidepanel-list', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
});
