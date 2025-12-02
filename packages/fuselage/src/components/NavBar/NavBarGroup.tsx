import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export const NavBarGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => (
    <ButtonGroup className='rcx-navbar-group' ref={ref} {...props} />
  ),
);
