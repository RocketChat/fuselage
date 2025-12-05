import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export type SidebarActionsProps = ButtonGroupProps;

const SidebarActions = forwardRef<HTMLDivElement, SidebarActionsProps>(
  function SidebarActions(props, ref) {
    return <ButtonGroup ref={ref} {...props} />;
  },
);

export default SidebarActions;
