import React from 'react';
import {
  SelectInput,
} from '@rocket.chat/fuselage';

export const StaticSelect = ({
  options,
  size,
  multiple,
  onChange,
  parser,
  placeholder,
}) => (
  <SelectInput
    size={size}
    multiple={multiple}
    onInput={onChange}
    placeholder={parser.text(placeholder)}
  >
    {options.map((option) => (
      <SelectInput.Option key={option.value} value={option.value}>
        {parser.text(option.text)}
      </SelectInput.Option>
    ))}
  </SelectInput>
);
