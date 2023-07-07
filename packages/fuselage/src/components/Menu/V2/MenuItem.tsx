import type { ComponentProps, ReactNode } from 'react';
import React, { useRef } from 'react';
import { useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';

import { MenuItemDescription } from '.';
import MenuOption from './MenuOption';
import type { Node } from './types';

type MenuItemProps = {
  item: Node<{
    description?: ReactNode;
    variant?: ComponentProps<typeof MenuOption>['variant'];
  }>;
  state: TreeState<unknown>;
};

function MenuItem({ item, state }: MenuItemProps) {
  const ref = useRef(null);
  const { menuItemProps, isFocused, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <MenuOption
      {...menuItemProps}
      ref={ref}
      focus={isFocused}
      disabled={isDisabled}
      is='label'
      variant={item.value && item.value.variant}
    >
      <div className='rcx-option__wrapper'>{item.rendered}</div>
      {item.value && item.value.description && (
        <MenuItemDescription>{item.value.description}</MenuItemDescription>
      )}
    </MenuOption>
  );
}

export default MenuItem;
