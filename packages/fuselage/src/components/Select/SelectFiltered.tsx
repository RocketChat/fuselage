import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, FormEvent, Ref } from 'react';
import React, { forwardRef, useCallback, useState } from 'react';

import { Select } from '.';
import { InputBox } from '../InputBox';

export type SelectFilteredProps = ComponentProps<typeof Select>;

export const SelectFiltered = forwardRef(
  (
    { options, placeholder, ...props }: SelectFilteredProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [filter, setFilter] = useState('');
    const anchor = useCallback(
      forwardRef(
        (
          { children, filter, ...props }: ComponentProps<typeof InputBox>,
          ref: Ref<HTMLInputElement>
        ) => (
          <InputBox.Input
            mi='x4'
            flexGrow={1}
            className='rcx-select__focus'
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onChange={useMutableCallback((e: FormEvent<HTMLInputElement>) =>
              setFilter(e.currentTarget.value)
            )}
            {...props}
            rcx-input-box--undecorated
          />
        )
      ),
      []
    );

    return (
      <Select
        ref={ref}
        placeholder={placeholder}
        filter={filter}
        options={options}
        {...props}
        anchor={anchor}
      />
    );
  }
);
