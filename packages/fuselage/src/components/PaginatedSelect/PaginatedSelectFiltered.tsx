import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, Ref } from 'react';
import React, { useMemo, forwardRef } from 'react';

import { InputBox } from '../InputBox';
import type { PaginatedSelectProps } from './PaginatedSelect';
import PaginatedSelect from './PaginatedSelect';

type PaginatedSelectFilteredProps = Omit<PaginatedSelectProps, 'setFilter'> & {
  setFilter: (value: string | undefined | number) => void;
};

const PaginatedSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedSelectFilteredProps) => {
  const anchor = useMemo(
    () =>
      // eslint-disable-next-line react/no-multi-comp
      forwardRef(function AnchorComponent(
        { filter, onChange: _onChange, ...props }: PaginatedSelectFilteredProps,
        ref: Ref<HTMLInputElement>
      ) {
        return (
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
        );
      }),
    [placeholder, setFilter]
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

export default PaginatedSelectFiltered;
