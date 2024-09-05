import type { HTMLAttributes } from 'react';

import { SidePanelDivider } from './SidePanelDivider';

export const SidePanelHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <>
    <div
      className={['rcx-sidepanel-header', className].filter(Boolean).join(' ')}
      {...props}
    />
    <SidePanelDivider />
  </>
);
