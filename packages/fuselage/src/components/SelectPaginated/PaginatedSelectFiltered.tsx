import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, {
  FormEvent,
  forwardRef,
  Ref,
  useCallback,
  useState,
} from 'react';

import { PaginatedSelect, PaginatedSelectProps } from '.';
import { InputBox } from '../InputBox';

type PaginatedSelectFilteredProps = PaginatedSelectProps;

export const PaginatedSelectFiltered = ({
  // filter,
  // setFilter,
  options,
  placeholder,
  ...props
}: PaginatedSelectFilteredProps) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef(
      (
        {
          children,
          filter,
          onChange: _onChange,
          ...props
        }: PaginatedSelectFilteredProps,
        ref: Ref<HTMLInputElement>
      ) => (
        <InputBox.Input
          mi='x4'
          flexGrow={1}
          className='rcx-select__focus'
          ref={ref}
          placeholder={placeholder}
          value={filter}
          onChange={useMutableCallback((e: FormEvent<HTMLInputElement>) => {
            setFilter(e.currentTarget.value);
          })}
          {...props}
          rcx-input-box--undecorated
        />
      )
    ),
    []
  );
  return (
    <PaginatedSelect
      placeholder={undefined}
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
