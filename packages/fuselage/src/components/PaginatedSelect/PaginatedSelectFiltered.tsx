import { useEffectEvent } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, Ref } from 'react';
import { useMemo, forwardRef } from 'react';

import { Input } from '../InputBox/index.js';

import type { PaginatedSelectProps } from './PaginatedSelect.js';
import { PaginatedSelect } from './PaginatedSelect.js';

type PaginatedSelectFilteredProps = Omit<PaginatedSelectProps, 'setFilter'> & {
  setFilter: (value: string | undefined | number) => void;
};

export const PaginatedSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedSelectFilteredProps) => {
  const anchor = useMemo(
    () =>
      forwardRef(
        (
          {
            filter,
            onChange: _onChange,
            ...props
          }: PaginatedSelectFilteredProps,
          ref: Ref<HTMLInputElement>,
        ) => (
          <Input
            mi={4}
            flexGrow={1}
            className='rcx-select__focus'
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onChange={useEffectEvent((e: FormEvent<HTMLInputElement>) => {
              setFilter(e.currentTarget.value);
            })}
            {...props}
            rcx-input-box--undecorated
          />
        ),
      ),
    [placeholder, setFilter],
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
