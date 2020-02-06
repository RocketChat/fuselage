import React from 'react';
import {
  Select,
  MultiSelect,
} from '@rocket.chat/fuselage';

import { useBlockContext } from './hooks';

export const StaticSelect = ({
  options,
  onChange,
  parser,
  placeholder = { text: 'select a option' },
  context,
  ...element
}) => {
  const [{ loading, value }, action] = useBlockContext(element, context);
  return <Select
    value={value}
    mod-loading={loading}
    options={options.map((option) => [option.value, parser.text(option.text)])}
    onChange={(value) => action({ target: { value } })}
    placeholder={parser.text(placeholder)} />;
};


export const MultiStaticSelect = ({
  context,
  options,
  parser,
  placeholder = { text: 'select a option' },
  ...element
}) => {
  const [{ loading, value }, action] = useBlockContext(element, context);
  return <MultiSelect
    value={value}
    mod-loading={loading}
    options={options.map((option) => [option.value, parser.text(option.text)])}
    onChange={(value) => action({ target: { value } })}
    placeholder={parser.text(placeholder)} />;
};
