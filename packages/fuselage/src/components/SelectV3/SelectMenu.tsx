import React from 'react';
import { components } from 'react-select';
import type { MenuProps } from 'react-select';

const SelectMenu = (props: MenuProps) => (
  <div className='rcx-box rcx-box--full'>
    <components.Menu {...props}>{props.children}</components.Menu>
  </div>
);

export default SelectMenu;
