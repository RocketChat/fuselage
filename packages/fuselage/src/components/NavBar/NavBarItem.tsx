import type { ComponentProps, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { appendClassName } from '../../helpers/appendClassName.js';
import { patchChildren } from '../../helpers/patchChildren.js';
import { IconButton } from '../Button/index.js';

type NavbarItemProps = Partial<ComponentProps<typeof IconButton>>;

export const NavBarItem = forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement> & NavbarItemProps
>(function NavBarItem({ children, icon, ...props }, ref) {
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
