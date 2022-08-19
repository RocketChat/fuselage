import type { ComponentProps } from 'react';
import React, { useRef } from 'react';
import {
  mergeProps,
  useMenuTrigger,
  useMenuItem,
  useMenu,
  FocusScope,
  usePress,
  DismissButton,
  useOverlay,
} from 'react-aria';
import { Item, useMenuTriggerState, useTreeState } from 'react-stately';

import { IconButton } from '../../Button';
import { Dropdown } from '../../Dropdown';
import Option from '../../Option';

type MenuTriggerProps = {
  icon?: ComponentProps<typeof IconButton>['icon'];
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
};

export const Menu = <T extends MenuTriggerProps>({
  icon = 'kebab',
  ...props
}: T) => {
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

  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, trigger);

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

function MenuDropDown(props) {
  // Create menu state based on the incoming props
  const state = useTreeState(props);

  // Get props for the menu element
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        width: 150,
      }}
    >
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          // <MenuSection key={item.key} section={item} state={state} />
          <></>
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

function MenuItem({ item, state }) {
  const ref = useRef(null);
  const { menuItemProps, isFocused, isSelected, isDisabled, isPressed } =
    useMenuItem({ key: item.key }, state, ref);

  return (
    <Option
      {...menuItemProps}
      ref={ref}
      focus={isFocused}
      // disabled={isDisabled}
      selected={isSelected}
    >
      {item.rendered}
    </Option>
  );
}
