import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, { FC, forwardRef, useCallback, useState } from 'react';

import { Select } from '.';
import { InputBox } from '../InputBox';
import { SelectProps } from './Select';

export const SelectFiltered: FC<SelectProps> = ({
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef<HTMLInputElement, SelectProps>(
      ({ children, filter, ...props }, ref) => (
        <InputBox.Input
          mi='x4'
          flexGrow={1}
          className='rcx-select__focus'
          ref={ref}
          placeholder={placeholder}
          value={filter}
          onChange={useMutableCallback((e) => setFilter(e.currentTarget.value))}
          {...props}
          rcx-input-box--undecorated
        />
      )
    ),
    []
  );

  return (
    <Select
      placeholder={null}
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
