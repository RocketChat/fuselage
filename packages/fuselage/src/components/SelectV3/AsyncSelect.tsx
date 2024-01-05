import type { ComponentProps } from 'react';
import React from 'react';
import AsyncSelect from 'react-select/async';

import DropdownIndicator from './DropdownIndicator';
import MultiValue from './MultiValue';
import SelectOption from './SelectOption';

const AsyncSelectComponent = ({
  components = {
    DropdownIndicator,
    Option: SelectOption,
    MultiValue,
  },
  ...props
}: ComponentProps<typeof AsyncSelect>) => (
  <AsyncSelect components={components} {...props} />
);

export default AsyncSelectComponent;
