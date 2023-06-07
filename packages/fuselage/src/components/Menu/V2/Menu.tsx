import type { ComponentProps } from 'react';
import React, { useRef } from 'react';
import type { AriaMenuProps } from 'react-aria';
import {
  mergeProps,
  useMenuTrigger,
  FocusScope,
  usePress,
  DismissButton,
  useOverlay,
} from 'react-aria';
import type { MenuTriggerProps } from 'react-stately';
import { useMenuTriggerState } from 'react-stately';

import { IconButton } from '../../Button';
import { Dropdown } from '../../Dropdown';
import MenuDropDown from './MenuDropdown';

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  icon?: ComponentProps<typeof IconButton>['icon'];
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
}
const Menu = <T extends object>({
  icon = 'kebab',
  ...props
}: MenuButtonProps<T>) => {
  const state = useMenuTriggerState(props);

  const trigger = useRef(null);
  const target = useRef(null);
  const { overlayProps } = useOverlay(
    {
      isOpen: state.isOpen,
      onClose: state.close,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    target
  );

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, trigger);

  const { pressProps, isPressed } = usePress(menuTriggerProps);

  return (
    <>
      <IconButton
        className={state.isOpen || isPressed ? 'is-focused' : undefined}
        icon={icon}
        ref={trigger}
        {...mergeProps(pressProps)}
      />
      {state.isOpen && (
        <Dropdown
          {...overlayProps}
          ref={target}
          reference={trigger}
          placement='bottom-end'
        >
          <FocusScope restoreFocus>
            <MenuDropDown {...props} {...menuProps} />
            <DismissButton onDismiss={state.close} />
          </FocusScope>
        </Dropdown>
      )}
    </>
  );
};
export default Menu;
