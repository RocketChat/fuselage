import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../Button';

type SideBarActionProps = ComponentProps<typeof IconButton>;

export const SideBarAction = forwardRef(function SidebarAction(
  props: SideBarActionProps,
  ref: Ref<HTMLElement>
) {
  return <IconButton small ref={ref} {...props} />;
});
