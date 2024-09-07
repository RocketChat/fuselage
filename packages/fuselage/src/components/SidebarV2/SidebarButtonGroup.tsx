import type { ComponentProps } from 'react';

import { ButtonGroup } from '../ButtonGroup';

export const SidebarButtonGroup = ({
  align = 'end',
  small = true,
  ...props
}: ComponentProps<typeof ButtonGroup>) => (
  <ButtonGroup align={align} small={small} {...props} />
);
