import type { HTMLAttributes } from 'react';

export type NavBarProps = HTMLAttributes<HTMLElement>;

const NavBar = (props: NavBarProps) => (
  <nav className='rcx-navbar rcx-d-flex rcx-justify-space-between rcx-items-center rcx-w-full' {...props} />
);

export default NavBar;
