import type { ComponentProps } from 'react';
import React, { useRef } from 'react';
import { useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';

import Option from '../../Option';
import type { Node } from './types';

type MenuItemProps = {
  item: Node<unknown>;
  state: TreeState<unknown>;
} & ComponentProps<typeof Option>;

function MenuItem({ item, state }: MenuItemProps) {
  const ref = useRef(null);
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <Option
      {...menuItemProps}
      {...item.props}
      ref={ref}
      focus={isFocused}
      disabled={isDisabled}
      selected={isSelected}
      // label={item.rendered}
      // icon={item.props.icon}
      // avatar={item.props.avatar}
    >
      {item.rendered}
    </Option>
  );
}

export default MenuItem;
