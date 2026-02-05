import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';

export type NavbarItemProps = HTMLAttributes<HTMLElement> &
  Partial<IconButtonProps>;

const NavBarItem = forwardRef<HTMLElement, NavbarItemProps>(function NavBarItem(
  { children, icon, ...props },
  ref,
) {
  return (
    <>
      {icon ? (
        <IconButton ref={ref} rcx-navbar-item icon={icon} small {...props} />
      ) : (
        patchChildren(
          children,
          (childProps: { className: string | string[] }) => ({
            className: appendClassName(childProps.className, 'rcx-navbar-item'),
            ref,
            ...props,
          }),
        )
      )}
    </>
  );
});

export default NavBarItem;
