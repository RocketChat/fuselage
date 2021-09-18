import { MultiSelectFiltered } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { memo, ReactElement, useCallback, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type MultiStaticSelectElementProps = {
  element: UiKit.MultiStaticSelectElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const MultiStaticSelectElement = ({
  element,
  context,
  parser,
}: MultiStaticSelectElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  const options = useMemo<readonly [string, string][]>(
    () =>
      element.options.map(({ value, text }, i) => [
        value,
        fromTextObjectToString(parser, text, i, context) ?? '',
      ]),
    [context, element.options, parser]
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
      options={options}
      placeholder={fromTextObjectToString(
        parser,
        element.placeholder,
        0,
        context
      )}
      onChange={handleChange}
    />
  );
};

export default memo(MultiStaticSelectElement);
