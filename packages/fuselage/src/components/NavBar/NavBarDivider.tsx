import React from 'react';

import type { DividerProps } from '../Divider';
import { Divider } from '../Divider';

export const NavBarDivider = (props: DividerProps) => (
  <Divider rcx-navbar-divider vertical {...props} />
);
