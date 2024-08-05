import type { UsePositionOptions } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, ReactElement } from 'react';
import { cloneElement, useRef } from 'react';
import type { AriaMenuProps } from 'react-aria';
import { useButton, useMenuTrigger } from 'react-aria';
import { createPortal } from 'react-dom';
import type { MenuTriggerProps } from 'react-stately';
import { useMenuTriggerState } from 'react-stately';

import type Box from '../../Box/Box';
import { IconButton } from '../../Button';
import MenuDropDown from './MenuDropdown';
import MenuPopover from './MenuPopover';
import { getPlacement } from './helpers/helpers';

export interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  icon?: ComponentProps<typeof IconButton>['icon'];
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
  placement?: UsePositionOptions['placement'];
  title?: string;
  detached?: boolean;
  /**
   * A component that renders an IconButton
   */
  is?: ElementType;
  className?: ComponentProps<typeof Box>['className'];
  pressed?: boolean;
  maxWidth?: string;
  button?: ReactElement;
}

/**
 * Kebab Menu. Use `<MenuItem>` to render the menu items.
 */
const Menu = <T extends object>({
  icon = 'kebab',
  placement = 'bottom-start',
  title,
  is: MenuButton = IconButton,
  className,
  pressed,
  maxWidth = 'x250',
  button,
  detached,
  ...props
}: MenuButtonProps<T>) => {
  const state = useMenuTriggerState(props);

  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  const { buttonProps } = useButton(
    { ...menuTriggerProps, ...{ preventFocusOnPress: true } },
    ref
  );

  const { large, medium, tiny, mini } = props;
  const sizes = { large, medium, tiny, mini };
  const defaultSmall = !large && !medium && !tiny && !mini;

  const popover = state.isOpen && (
    <MenuPopover
      state={state}
      triggerRef={ref}
      placement={getPlacement(placement)}
      maxWidth={maxWidth}
    >
      <MenuDropDown {...props} {...menuProps} />
    </MenuPopover>
  );

  return (
    <>
      {button ? (
        cloneElement(button, {
          ...buttonProps,
          ref,
          icon,
          className,
          title,
          pressed: pressed || state.isOpen,
        })
      ) : (
        <MenuButton
          {...buttonProps}
          ref={ref}
          icon={icon}
          className={className}
          title={title}
          pressed={pressed || state.isOpen}
          small={defaultSmall}
          {...sizes}
        />
      )}
      {detached ? createPortal(popover, document.body) : popover}
    </>
  );
};

Menu.displayName = 'MenuV2';

export default Menu;
