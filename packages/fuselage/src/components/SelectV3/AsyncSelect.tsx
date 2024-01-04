import type { ComponentProps } from 'react';
import React from 'react';
import AsyncSelect from 'react-select/async';

import Control from './Control';
import DropdownIndicator from './DropdownIndicator';
import MultiValue from './MultiValue';
import SelectMenu from './SelectMenu';
import SelectOption from './SelectOption';

const AsyncSelectComponent = ({
  components = {
    Control,
    DropdownIndicator,
    Option: SelectOption,
    MultiValue,
    Menu: SelectMenu,
  },
  ...props
}: ComponentProps<typeof AsyncSelect>) => (
  <AsyncSelect components={components} {...props} />
);

export default AsyncSelectComponent;
