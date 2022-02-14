import React, { forwardRef, useCallback, useState } from 'react';

import { Flex } from '../Box';
import { InputBox } from '../InputBox';
import { MultiSelect } from './MultiSelect';

export const MultiSelectFiltered = ({
  options,
  placeholder,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef(({ children, filter, ...props }, ref) => (
      <Flex.Item grow={1}>
        <InputBox.Input
          ref={ref}
          placeholder={placeholder}
          value={propFilter || filter}
          onInput={(e) =>
            propSetFilter
              ? propSetFilter(e.currentTarget.value)
              : setFilter(e.currentTarget.value)
          }
          {...props}
          rcx-input-box--undecorated
        />
      </Flex.Item>
    )),
    []
  );
  return (
    <MultiSelect filter={filter} options={options} {...props} anchor={anchor} />
  );
};
