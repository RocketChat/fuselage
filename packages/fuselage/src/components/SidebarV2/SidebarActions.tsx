import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { ButtonGroup } from '../ButtonGroup/index.js';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SidebarActions = forwardRef(function SidebarActions(
  props: SidebarActionsProps,
  ref: Ref<HTMLDivElement>,
) {
  return <ButtonGroup ref={ref} {...props} />;
});
