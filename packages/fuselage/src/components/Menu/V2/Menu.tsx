import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType } from 'react';
import React, { useRef } from 'react';
import type { AriaMenuProps } from 'react-aria';
import { useButton, useMenuTrigger } from 'react-aria';
import type { MenuTriggerProps } from 'react-stately';
import { useMenuTriggerState } from 'react-stately';

import { IconButton } from '../../Button';
import MenuDropDown from './MenuDropdown';
import MenuPopover from './MenuPopover';
import { getPlacement } from './helpers/helpers';

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  icon?: ComponentProps<typeof IconButton>['icon'];
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
  placement?: UsePositionOptions['placement'];
  title?: string;
  /**
   * A component that renders an IconButton
   */
  is?: ElementType;
  className?: string;
  pressed?: boolean;
}
const Menu = <T extends object>({
  icon = 'kebab',
  placement = 'bottom-start',
  title,
  is: MenuButton = IconButton,
  className,
  pressed,
  ...props
}: MenuButtonProps<T>) => {
  const state = useMenuTriggerState(props);

  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  const { buttonProps } = useButton(menuTriggerProps, ref);

  return (
    <>
      <MenuButton
        {...buttonProps}
        ref={ref}
        icon={icon}
        className={className}
        title={title}
        pressed={pressed || state.isOpen}
        small
      />
      {state.isOpen && (
        <MenuPopover
          state={state}
          triggerRef={ref}
          placement={getPlacement(placement)}
        >
          <MenuDropDown {...props} {...menuProps} />
        </MenuPopover>
      )}
    </>
  );
};
export default Menu;
