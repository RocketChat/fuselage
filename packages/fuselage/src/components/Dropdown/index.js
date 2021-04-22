import React, { useState, useCallback, useRef, useMemo } from 'react';

import { PositionAnimated, Box } from '../Box';
import { useCursor } from '../Options';
import DropdownAction from './DropdownAction';
import DropdownContext from './DropdownContext';
import DropdownItem from './DropdownItem';
import DropdownTile from './DropdownTile';
import PortalTarget from './PortalTarget';

const Dropdown = ({ children, overlay }) => {
  const [items, setItems] = useState(new Map());
  const [order, setOrder] = useState([]);
  const ref = useRef();

  const onChange = useCallback(
    (cursor) => {
      items.get(cursor)();
    },
    [items]
  );

  const [cursor, handleKeyDown, handleKeyUp, , visibilityHandler] = useCursor(
    -1,
    order,
    onChange
  );

  const [visibility, hide, show] = visibilityHandler;

  const getItemState = useCallback(
    (id) => {
      return id === order[cursor];
    },
    [cursor, order]
  );

  const unregisterItem = useCallback(
    (id) => {
      setItems((items) => {
        items.delete(id);
        return items;
      });
    },
    [setItems]
  );

  const registerItem = useCallback(
    (id, action) => {
      setItems((items) => {
        items.set(id, action);
        return items;
      });
      return () => unregisterItem(id);
    },
    [setItems, unregisterItem]
  );

  const updateItemOrder = useCallback(
    (newOrder) => {
      setOrder(newOrder);
    },
    [setOrder]
  );

  const value = useMemo(
    () => ({
      getItemState,
      registerItem,
      updateItemOrder,
      hide,
    }),
    [getItemState, hide, registerItem, updateItemOrder]
  );

  const onClick = useCallback(() => {
    ref?.current?.focus() && show();
    ref?.current?.classList.add('focus-visible');
  }, [show]);

  return (
    <DropdownContext.Provider value={value}>
      <Box
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={onClick}
      >
        {children}
      </Box>
      <PositionAnimated anchor={ref} visible={visibility}>
        <PortalTarget>{overlay}</PortalTarget>
      </PositionAnimated>
    </DropdownContext.Provider>
  );
};

Object.assign(Dropdown, {
  Item: DropdownItem,
  Action: DropdownAction,
  Tile: DropdownTile,
});

export default Dropdown;
