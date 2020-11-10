import { SelectFiltered, MultiSelectFiltered } from '@rocket.chat/fuselage';
import React from 'react';

import { useBlockContext } from './hooks';

export const StaticSelect = React.memo(
  ({
    options,
    onChange,
    parser,
    placeholder = { text: 'select a option' },
    context,
    ...element
  }) => {
    const [{ loading, value, error }, action] = useBlockContext(
      element,
      context
    );

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
  }
);

export const MultiStaticSelect = React.memo(
  ({
    context,
    options,
    parser,
    placeholder = { text: 'select a option' },
    ...element
  }) => {
    const [{ loading, value, error }, action] = useBlockContext(
      element,
      context
    );
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
  }
);
