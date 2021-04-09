import React, { FC } from 'react';

import { Option } from '../..';
import DropdownAction from './DropdownAction';
import { OnDispatchAction } from './DropdownContext'

const DropdownItem: FC<{ onDispatchAction: OnDispatchAction }> = ({ onDispatchAction, ...props }) => {
  return (
    <DropdownAction onDispatchAction={onDispatchAction}>
      {(active, id, onClick) => (
        <Option
          dropdown-id={id}
          selected={active}
          onClick={onClick}
          {...props}
        />
      )}
    </DropdownAction>
  );
};

export default DropdownItem;
