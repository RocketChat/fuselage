import type { ComponentProps } from 'react';

import { ButtonGroup } from '../ButtonGroup';

export const SideBarButtonGroup = ({
  align = 'end',
  small = true,
  ...props
}: ComponentProps<typeof ButtonGroup>) => (
  <ButtonGroup align={align} small={small} {...props} />
);
