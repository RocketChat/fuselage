import React from 'react';
import {
  SelectFiltered,
  MultiSelectFiltered,
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
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  return <SelectFiltered
    error={error}
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
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  return <MultiSelectFiltered
    value={value}
    mod-loading={loading}
    error={error}
    options={options.map((option) => [option.value, parser.text(option.text)])}
    onChange={(value) => action({ target: { value } })}
    placeholder={parser.text(placeholder)} />;
};
