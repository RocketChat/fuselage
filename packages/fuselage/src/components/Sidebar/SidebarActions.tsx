import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

const SidebarActions = (props: SidebarActionsProps) => (
  <ButtonGroup {...props} />
);

export default SidebarActions;
