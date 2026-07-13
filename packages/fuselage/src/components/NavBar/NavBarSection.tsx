import type { HTMLAttributes } from 'react';
import { Fragment, isValidElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import NavBarDivider from './NavBarDivider';

export type NavbarSectionProps = HTMLAttributes<HTMLSpanElement>;

const NavBarSection = ({ children, ...props }: NavbarSectionProps) => {
  const groups = flattenChildren(children).filter(isValidElement);

  return (
    <span className='rcx-navbar-section' {...props}>
      {groups.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < groups.length - 1 && <NavBarDivider />}
        </Fragment>
      ))}
    </span>
  );
};

export default NavBarSection;
