import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { ButtonGroup } from '../ButtonGroup';

type SideBarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SideBarActions = forwardRef(function SideBarActions(
  props: SideBarActionsProps,
  ref: Ref<HTMLDivElement>
) {
  return <ButtonGroup ref={ref} {...props} />;
});
