import type { Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';

type SidebarActionProps = IconButtonProps;

export const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: Ref<HTMLElement>,
) {
  return <IconButton small ref={ref} {...props} />;
});
