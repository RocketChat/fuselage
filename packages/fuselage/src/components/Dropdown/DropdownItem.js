import React from 'react';

import { Option } from '../..';
import DropdownAction from './DropdownAction';

const DropdownItem = ({ onDispatchAction, ...props }) => {
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
