import type { Node } from '@react-types/shared';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';

import { MenuItemDescription } from '.';
import type { MenuOptionProps } from './MenuOption';
import MenuOption from './MenuOption';

type MenuItemProps = {
  item: Node<{
    description?: ReactNode;
    variant?: MenuOptionProps['variant'];
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
      variant={item.value?.variant}
    >
      <div className='rcx-option__wrapper'>{item.rendered}</div>
      {item.value && item.value.description && (
        <MenuItemDescription>{item.value.description}</MenuItemDescription>
      )}
    </MenuOption>
  );
}

export default MenuItem;
