import type { ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import type { IconButtonProps } from '../Button';
import { IconButton } from '../Button';

type NavbarItemProps = HTMLAttributes<HTMLElement> & Partial<IconButtonProps>;

export const NavBarItem = forwardRef(function NavBarItem(
  { children, icon, ...props }: NavbarItemProps,
  ref: ForwardedRef<HTMLElement>
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
          })
        )
      )}
    </>
  );
});
