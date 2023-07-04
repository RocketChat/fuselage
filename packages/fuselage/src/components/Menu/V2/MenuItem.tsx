import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';

import { MenuItemDescription } from '.';
import MenuOption from './MenuOption';
import type { Node } from './types';

type MenuItemProps = {
  item: Node<{ description?: ReactNode; header?: ReactNode }>;
  state: TreeState<unknown>;
};

function MenuItem({ item, state }: MenuItemProps) {
  const ref = useRef(null);
  const { menuItemProps, isFocused, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  if (item.value.header) {
    return (
      <label ref={ref} {...menuItemProps} className=''>
        {item.rendered}
      </label>
    );
  }

  return (
    <MenuOption
      {...menuItemProps}
      ref={ref}
      focus={isFocused}
      disabled={isDisabled}
      is='label'
    >
      <div className='rcx-option__wrapper'>{item.rendered}</div>
      {item.value && item.value.description && (
        <MenuItemDescription>{item.value.description}</MenuItemDescription>
      )}
    </MenuOption>
  );
}

export default MenuItem;
