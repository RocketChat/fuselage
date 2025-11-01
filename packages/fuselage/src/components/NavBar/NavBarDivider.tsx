import type { ComponentProps } from 'react';

import { Divider } from '../Divider/index.js';

export const NavBarDivider = (props: ComponentProps<typeof Divider>) => (
  <Divider rcx-navbar-divider vertical {...props} />
);
