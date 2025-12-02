import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type SidepanelListProps = HTMLAttributes<HTMLDivElement>;

const SidepanelList = forwardRef<HTMLDivElement, SidepanelListProps>(
  function SidepanelList({ className, ...props }, ref) {
    return (
      <div
        role='list'
        ref={ref}
        className={['rcx-sidepanel-list', className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);

export default SidepanelList;
