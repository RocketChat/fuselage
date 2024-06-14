import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

import { ButtonGroup } from '../ButtonGroup';

export const NavBarGroup = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ButtonGroup>
>((props, ref) => (
  <ButtonGroup className='rcx-navbar-group' ref={ref} {...props} />
));
