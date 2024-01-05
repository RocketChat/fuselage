import React from 'react';
import type { DropdownIndicatorProps } from 'react-select';
import { components } from 'react-select';

import { Icon } from '..';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <Icon name={menuIsOpen ? 'chevron-up' : 'chevron-down'} size='x20' />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
