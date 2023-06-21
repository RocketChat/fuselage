import React, { useRef } from 'react';
import { useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';

import Option from '../../Option';
import type { Node } from './types';

type MenuItemProps = {
  item: Node<unknown>;
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
    <Option
      {...menuItemProps}
      ref={ref}
      focus={isFocused}
      disabled={isDisabled}
      is='label'
    >
      {item.rendered}
    </Option>
  );
}

export default MenuItem;
