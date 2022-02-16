import React, { forwardRef, useCallback, useState } from 'react';

import Flex from '../Flex';
import { InputBox } from '../InputBox';
import { MultiSelect } from './MultiSelect';

export const MultiSelectFiltered = ({ options, placeholder, ...props }) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef(({ children, filter, ...props }, ref) => (
      <Flex.Item grow={1}>
        <InputBox.Input
          ref={ref}
          placeholder={placeholder}
          value={filter}
          onInput={(e) => setFilter(e.currentTarget.value)}
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
