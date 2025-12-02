import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ButtonGroupProps;

export const SidebarActions = forwardRef(function SidebarActions(
  props: SidebarActionsProps,
  ref: Ref<HTMLDivElement>,
) {
  return <ButtonGroup ref={ref} {...props} />;
});
