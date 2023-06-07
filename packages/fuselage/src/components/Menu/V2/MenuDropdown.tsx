import React, { useRef } from 'react';
import type { AriaMenuProps } from 'react-aria';
import { useMenu } from 'react-aria';
import { useTreeState } from 'react-stately';

import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

function MenuDropDown<T extends object>(props: AriaMenuProps<T>) {
  const state = useTreeState(props);

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
          <MenuSection key={item.key} section={item} state={state} />
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

export default MenuDropDown;
