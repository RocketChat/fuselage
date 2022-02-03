import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { Select } from '.';
import { InputBox } from '../InputBox';

export type SelectFilteredProps = Omit<
  ComponentProps<typeof Select>,
  'onChange'
>;

export const SelectFiltered = forwardRef<HTMLInputElement, SelectFilteredProps>(
  ({ options, placeholder, ...props }, ref) => {
    const [filter, setFilter] = useState('');
    const anchor = useCallback(
      forwardRef<HTMLInputElement, ComponentProps<typeof InputBox>>(
        ({ children, filter, ...props }, ref) => (
          <InputBox.Input
            mi='x4'
            flexGrow={1}
            className='rcx-select__focus'
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onChange={useMutableCallback((e) =>
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
        placeholder={null}
        filter={filter}
        options={options}
        {...props}
        anchor={anchor}
      />
    );
  }
);
