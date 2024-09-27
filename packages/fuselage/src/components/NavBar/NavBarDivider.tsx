import type { ComponentProps } from 'react';

import { Divider } from '../Divider';

export const NavBarDivider = (props: ComponentProps<typeof Divider>) => (
  <Divider rcx-navbar-divider vertical {...props} />
);
