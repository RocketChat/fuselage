import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import { useCallback, useContext, useEffect } from 'react';

import DropdownContext from './DropdownContext';

const DropdownAction = ({ onDispatchAction, children }) => {
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
