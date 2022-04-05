import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';
import { Label } from '../Label';

type ToggleSwitchProps = ComponentProps<typeof Box> & {
  'qa'?: string;
  'data-qa'?: string;
};

export const ToggleSwitch = forwardRef(function ToggleSwitch(
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
  }: ToggleSwitchProps,
  ref: Ref<HTMLInputElement>
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
});
