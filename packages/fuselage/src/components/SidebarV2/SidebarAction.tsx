import { forwardRef } from 'react';

import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';

export type SidebarActionProps = IconButtonProps;

const SidebarAction = forwardRef<HTMLElement, SidebarActionProps>(
  function SidebarAction(props, ref) {
    return <IconButton small ref={ref} {...props} />;
  },
);

export default SidebarAction;
