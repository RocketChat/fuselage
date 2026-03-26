import type { DividerProps } from '../Divider';
import { Divider } from '../Divider';

export type NavBarDividerProps = DividerProps;

const NavBarDivider = (props: NavBarDividerProps) => (
  <Divider vertical borderLeftColor='$strokeMedium' {...props} />
);

export default NavBarDivider;
