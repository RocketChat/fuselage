import React, { ComponentProps, forwardRef } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type ToggleSwitchProps = ComponentProps<typeof Box> & {
  'autoComplete'?: string;
  'checked': boolean;
  'defaultChecked': boolean;
  'disabled': boolean;
  'form': string;
  'id': string;
  'name': string;
  'required': boolean;
  'tabIndex': number;
  'value': string;
  'qa': string;
  'data-qa': string;
  'onChange': (value: unknown, action: unknown | undefined) => void;
  'onInput': (value: unknown, action: unknown | undefined) => void;
  'onInvalid': (value: unknown, action: unknown | undefined) => void;
};

export const ToggleSwitch = forwardRef<HTMLElement, ToggleSwitchProps>(
  function ToggleSwitch(
    {
      autoComplete,
      checked,
      defaultChecked,
      disabled,
      form,
      id,
      name,
      required,
      tabIndex,
      value,
      qa,
      'data-qa': dataQa,
      onChange,
      onInput,
      onInvalid,
      ...props
    },
    ref
  ) {
    return (
      <Box is={Label} rcx-toggle-switch {...props}>
        <Box
          is='input'
          rcx-toggle-switch__input
          autoComplete={autoComplete}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          form={form}
          id={id}
          name={name}
          required={required}
          tabIndex={tabIndex}
          type='checkbox'
          value={value}
          data-qa={dataQa || qa}
          ref={ref}
          onChange={onChange}
          onInput={onInput}
          onInvalid={onInvalid}
        />
        <Box is='i' rcx-toggle-switch__fake aria-hidden='true' />
      </Box>
    );
  }
);
