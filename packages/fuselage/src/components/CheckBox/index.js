import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

export const CheckBox = forwardRef(function CheckBox({
  autoComplete,
  checked,
  defaultChecked,
  disabled,
  form,
  id,
  indeterminate,
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
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [innerRef, indeterminate]);

  const handleChange = useCallback((event) => {
    innerRef.current.indeterminate = indeterminate;
    onChange && onChange.call(innerRef.current, event);
  }, [innerRef, indeterminate, onChange]);

  return <Box is={Label} rcx-check-box {...props}>
    <Box
      is='input'
      rcx-check-box__input
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
      ref={mergedRef}
      onChange={handleChange}
      onInput={onInput}
      onInvalid={onInvalid}
    />
    <Box is='i' rcx-check-box__fake aria-hidden='true' />
  </Box>;
});

CheckBox.propTypes = {
  autoComplete: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
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
