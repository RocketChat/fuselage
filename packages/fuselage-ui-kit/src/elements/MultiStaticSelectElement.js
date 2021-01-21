import { MultiSelectFiltered } from '@rocket.chat/fuselage';
import React, { memo, useCallback, useMemo } from 'react';

import { useBlockContext } from '../hooks';

export const MultiStaticSelectElement = ({ element, context, parser }) => {
  const [{ loading, value, error }, action] = useBlockContext(element, context);

  const { options, placeholder } = element;

  const _options = useMemo(
    () => options.map((option) => [option.value, parser.text(option.text)]),
    [options, parser]
  );

  const handleChange = useCallback(
    (value) => {
      action({ target: { value } });
    },
    [action]
  );

  return (
    <MultiSelectFiltered
      value={value}
      disabled={loading}
      error={error}
      options={_options}
      placeholder={parser.text(placeholder)}
      onChange={handleChange}
    />
  );
};

export default memo(MultiStaticSelectElement);
