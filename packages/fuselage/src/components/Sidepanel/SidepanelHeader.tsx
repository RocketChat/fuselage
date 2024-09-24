import type { HTMLAttributes } from 'react';

import { SidepanelDivider } from './SidepanelDivider';

export const SidepanelHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <>
    <div
      className={['rcx-sidepanel-header', className].filter(Boolean).join(' ')}
      {...props}
    />
    <SidepanelDivider />
  </>
);
