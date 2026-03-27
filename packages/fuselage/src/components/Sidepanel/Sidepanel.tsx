import type { HTMLAttributes } from 'react';

export type SidepanelProps = HTMLAttributes<HTMLDivElement>;

const Sidepanel = ({ className, ...props }: SidepanelProps) => (
  <div
    className={['rcx-sidepanel rcx-d-flex rcx-flex-column', className].filter(Boolean).join(' ')}
    {...props}
  />
);

export default Sidepanel;
