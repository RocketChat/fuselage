import type { ComponentProps, HTMLAttributes } from 'react';
import React from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { IconButton } from '../Button';

type NavbarItemProps = Partial<ComponentProps<typeof IconButton>>;

export const NavBarItem = ({
  icon,
  children,
  ...props
}: NavbarItemProps & HTMLAttributes<HTMLLIElement>) => (
  <>
    {icon ? (
      <IconButton rcx-navbar-item icon={icon} small {...props} />
    ) : (
      patchChildren(
        children,
        (childProps: { className: string | string[] }) => ({
          className: appendClassName(childProps.className, 'rcx-navbar-item'),
          ...props,
        })
      )
    )}
  </>
);
