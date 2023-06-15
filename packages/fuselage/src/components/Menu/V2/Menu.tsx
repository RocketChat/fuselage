import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
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
  placement?: UsePositionOptions['placement'];
}
const Menu = <T extends object>({
  icon = 'kebab',
  placement = 'bottom-start',
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

  const { menuProps, menuTriggerProps } = useMenuTrigger<T>({}, state, trigger);

  const { pressProps } = usePress(menuTriggerProps);

  return (
    <>
      <IconButton icon={icon} ref={trigger} small {...mergeProps(pressProps)} />
      {state.isOpen && (
        <Dropdown
          {...overlayProps}
          ref={target}
          reference={trigger}
          placement={placement}
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
