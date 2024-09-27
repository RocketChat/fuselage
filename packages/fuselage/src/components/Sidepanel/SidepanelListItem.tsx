import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export const SidepanelListItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidepanelListItem({ className, ...props }, ref) {
  return (
    <div
      role='listitem'
      ref={ref}
      className={['rcx-sidepanel-list__item', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
