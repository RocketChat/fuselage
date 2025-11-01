import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../Button/index.js';

type SidebarActionProps = ComponentProps<typeof IconButton>;

export const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: Ref<HTMLElement>,
) {
  return <IconButton small ref={ref} {...props} />;
});
