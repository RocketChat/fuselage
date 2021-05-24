import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import { useCallback, useContext, useEffect, FC, ReactElement } from 'react';

import DropdownContext, { ItemId, OnDispatchAction } from './DropdownContext';

type DropdownActionType = {
  onDispatchAction: OnDispatchAction;
  children: (
    active: boolean,
    id: ItemId,
    action: OnDispatchAction
  ) => ReactElement;
};

const DropdownAction: FC<DropdownActionType> = ({
  onDispatchAction,
  children,
}) => {
  const id = useUniqueId();
  const { hide, getItemState, registerItem } = useContext(DropdownContext);

  const action = useCallback(
    (e) => {
      hide();
      onDispatchAction(e);
    },
    [hide, onDispatchAction]
  );

  useEffect(() => {
    const unregisterItem = registerItem(id, action);
    return () => unregisterItem();
  }, [registerItem, id, action]);

  return children(getItemState(id), id, action);
};

export default DropdownAction;
