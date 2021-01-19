import { SelectFiltered } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

import { useBlockContext } from '../hooks';

export const StaticSelectElement = ({
  options,
  onChange,
  parser,
  placeholder = { text: 'select a option' },
  context,
  ...element
}) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);

  return (
    <SelectFiltered
      error={error}
      value={value}
      disabled={loading}
      options={options.map((option) => [
        option.value,
        parser.text(option.text),
      ])}
      onChange={(value) => action({ target: { value } })}
      placeholder={parser.text(placeholder)}
    />
  );
};

export default memo(StaticSelectElement);
