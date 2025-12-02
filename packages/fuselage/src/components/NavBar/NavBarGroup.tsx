import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export type NavBarGroupProps = ButtonGroupProps;

const NavBarGroup = forwardRef<HTMLDivElement, NavBarGroupProps>(
  (props, ref) => (
    <ButtonGroup className='rcx-navbar-group' ref={ref} {...props} />
  ),
);

export default NavBarGroup;
