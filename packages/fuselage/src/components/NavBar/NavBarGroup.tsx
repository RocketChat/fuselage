import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export const NavBarGroup = forwardRef(function NavBarGroup(
  props: ButtonGroupProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <ButtonGroup className='rcx-navbar-group' ref={ref} {...props} />;
});
