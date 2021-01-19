import { MultiSelectFiltered } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

import { useBlockContext } from '../hooks';

export const MultiStaticSelectElement = ({
  context,
  options,
  parser,
  placeholder = { text: 'select a option' },
  ...element
}) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);
  return (
    <MultiSelectFiltered
      value={value}
      disabled={loading}
      error={error}
      options={options.map((option) => [
        option.value,
        parser.text(option.text),
      ])}
      onChange={(value) => action({ target: { value } })}
      placeholder={parser.text(placeholder)}
    />
  );
};

export default memo(MultiStaticSelectElement);
