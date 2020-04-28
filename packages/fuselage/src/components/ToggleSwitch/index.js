import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Label } from '../Label';
import { Box } from '../Box';

export const ToggleSwitch = forwardRef(function ToggleSwitch({
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
}, ref) {
  return <Box is={Label} rcx-toggle-switch {...props}>
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
  </Box>;
});

ToggleSwitch.propTypes = {
  autoComplete: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  value: PropTypes.string,
  qa: PropTypes.string,
  'data-qa': PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onInvalid: PropTypes.func,
};
