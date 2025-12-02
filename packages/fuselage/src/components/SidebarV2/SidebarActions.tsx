import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ButtonGroupProps;

export const SidebarActions = forwardRef<HTMLDivElement, SidebarActionsProps>(
  function SidebarActions(props, ref) {
    return <ButtonGroup ref={ref} {...props} />;
  },
);
