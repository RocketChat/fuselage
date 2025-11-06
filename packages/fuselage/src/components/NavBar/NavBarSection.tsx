import type { HTMLAttributes } from 'react';
import { Fragment, Children, isValidElement } from 'react';

import { NavBarDivider } from './NavBarDivider';

export const NavBarSection = ({
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  const validChildren = Children.toArray(children).filter(isValidElement);

  return (
    <span className='rcx-navbar-section' {...props}>
      {validChildren.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < validChildren.length - 1 && <NavBarDivider />}
        </Fragment>
      ))}
    </span>
  );
};
