import type { ComponentType, HTMLAttributes, ReactElement } from 'react';
import { Fragment, Children, isValidElement } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
import NavBarDivider from './NavBarDivider';
import NavBarGroup from './NavBarGroup';

const NavBarSectionFrame = styled(RcxView, {
  name: 'NavBarSection',
  tag: 'span',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

type ComponentWithDisplayName = {
  displayName?: string;
  props?: Record<string, unknown>;
} & ComponentType;

export type NavbarSectionProps = HTMLAttributes<HTMLSpanElement>;

const isNavBarGroup = (
  child: unknown,
): child is ReactElement<NavbarSectionProps, ComponentWithDisplayName> => {
  if (!isValidElement(child)) return false;
  const component = child.type as ComponentWithDisplayName;
  return component.displayName === NavBarGroup.displayName;
};

const NavBarSection = ({ children, ...props }: NavbarSectionProps) => {
  const validChildren = Children.toArray(children).filter(isNavBarGroup);

  return (
    <NavBarSectionFrame {...(props as any)}>
      {Children.toArray(children).map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < validChildren.length - 1 && <NavBarDivider />}
        </Fragment>
      ))}
    </NavBarSectionFrame>
  );
};

export default NavBarSection;
