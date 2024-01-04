import React from 'react';
import type { DropdownIndicatorProps } from 'react-select';
import { components } from 'react-select';

import { Margins, Box, Icon } from '..';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <Margins inline='x4'>
        <Box is='div' rcx-select__addon>
          <Icon name={menuIsOpen ? 'chevron-up' : 'chevron-down'} size='x20' />
        </Box>
      </Margins>
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
