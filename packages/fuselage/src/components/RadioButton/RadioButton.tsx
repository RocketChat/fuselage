import React, { ComponentProps, forwardRef } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type RadioButtonProps = ComponentProps<typeof Box>;

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(
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
      <Box is={Label} rcx-radio-button {...props}>
        <Box
          is='input'
          rcx-radio-button__input
          autoComplete={autoComplete}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          form={form}
          id={id}
          name={name}
          required={required}
          tabIndex={tabIndex}
          type='radio'
          value={value}
          data-qa={dataQa || qa}
          ref={ref}
          onChange={onChange}
          onInput={onInput}
          onInvalid={onInvalid}
        />
        <Box is='i' rcx-radio-button__fake aria-hidden='true' />
      </Box>
    );
  }
);
