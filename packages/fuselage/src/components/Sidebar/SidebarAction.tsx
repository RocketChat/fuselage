import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { IconButton } from '../Button';

type SidebarActionProps = ComponentProps<typeof IconButton>;

const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: Ref<HTMLElement>
) {
  return <IconButton small ref={ref} {...props} />;
});

export default SidebarAction;
