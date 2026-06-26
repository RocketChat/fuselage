import type {
  CollectionChildren,
  FocusableElement,
  Node,
} from '@react-types/shared';
import type { RefObject } from 'react';
import { useRef } from 'react';
import { mergeProps, useMenuItem, useSubmenuTrigger } from 'react-aria';
import type { RootMenuTriggerState, TreeState } from 'react-stately';
import { useSubmenuTriggerState } from 'react-stately';

import { Icon } from '../Icon';

import MenuDropDown from './MenuDropdown';
import type { MenuOptionProps } from './MenuOption';
import MenuOption from './MenuOption';
import MenuPopover from './MenuPopover';

type MenuSubmenuProps = {
  item: Node<{
    variant?: MenuOptionProps['variant'];
  }>;
  state: TreeState<unknown>;
  rootMenuTriggerState: RootMenuTriggerState;
  parentMenuRef: RefObject<HTMLElement | null>;
};

/**
 * Renders a menu item that opens a nested submenu.
 *
 * The trigger item belongs to the parent menu's tree state (so arrow-key
 * navigation keeps working), while the submenu renders its own `MenuDropDown`
 * built from the trigger's children — giving it an isolated collection and
 * focus scope, mirroring how `react-aria-components` handles `SubmenuTrigger`.
 */
function MenuSubmenu({
  item,
  state,
  rootMenuTriggerState,
  parentMenuRef,
}: MenuSubmenuProps) {
  const triggerRef = useRef<FocusableElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const submenuTriggerState = useSubmenuTriggerState(
    { triggerKey: item.key },
    rootMenuTriggerState,
  );

  const { submenuTriggerProps, submenuProps, popoverProps } =
    useSubmenuTrigger<object>(
      { parentMenuRef, submenuRef },
      submenuTriggerState,
      triggerRef,
    );

  const { menuItemProps, isFocused, isDisabled } = useMenuItem(
    { ...submenuTriggerProps, key: item.key },
    state,
    triggerRef,
  );

  return (
    <>
      <MenuOption
        {...mergeProps(menuItemProps, {
          'id': submenuTriggerProps.id,
          'aria-haspopup': submenuTriggerProps['aria-haspopup'],
          'aria-expanded': submenuTriggerProps['aria-expanded'],
          'aria-controls': submenuTriggerProps['aria-controls'],
        })}
        ref={triggerRef}
        focus={isFocused}
        disabled={isDisabled}
        is='div'
        variant={item.value?.variant}
      >
        <div className='rcx-option__wrapper'>
          {item.rendered}
          <div className='rcx-option__input'>
            <Icon name='chevron-left' size='x16' />
          </div>
        </div>
      </MenuOption>
      {submenuTriggerState.isOpen && (
        <MenuPopover
          {...popoverProps}
          state={submenuTriggerState}
          triggerRef={triggerRef}
          placement='right top'
        >
          <MenuDropDown
            {...submenuProps}
            rootMenuTriggerState={rootMenuTriggerState}
            menuRef={submenuRef}
          >
            {item.props?.children as CollectionChildren<object>}
          </MenuDropDown>
        </MenuPopover>
      )}
    </>
  );
}

export default MenuSubmenu;
