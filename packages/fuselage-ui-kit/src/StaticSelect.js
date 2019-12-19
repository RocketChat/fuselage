import React from 'react';
import {
  Select,
  MultiSelect,
} from '@rocket.chat/fuselage';

export const StaticSelect = ({
  options,
  onChange,
  parser,
  placeholder = { text: 'select a option' },
}) => (
  <Select
    options={options.map((option) => [option.value, parser.text(option.text)])}
    onChange={(value) => onChange({ target: { value } })}
    placeholder={parser.text(placeholder)} />);


export const MultiStaticSelect = ({
  options,
  onChange,
  parser,
  placeholder = { text: 'select a option' },
}) => (
  <MultiSelect
    options={options.map((option) => [option.value, parser.text(option.text)])}
    onChange={(value) => onChange({ target: { value } })}
    placeholder={parser.text(placeholder)} />);
