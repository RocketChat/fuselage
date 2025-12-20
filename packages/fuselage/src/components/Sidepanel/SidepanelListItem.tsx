import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type SidepanelListItemProps = HTMLAttributes<HTMLDivElement>;

const SidepanelListItem = forwardRef<HTMLDivElement, SidepanelListItemProps>(
  function SidepanelListItem({ className, ...props }, ref) {
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
  },
);

export default SidepanelListItem;
