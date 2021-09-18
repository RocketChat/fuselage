import { SelectFiltered } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { memo, ReactElement, useCallback, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type StaticSelectElementProps = {
  element: UiKit.StaticSelectElement;
  context: UiKit.BlockContext;
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const StaticSelectElement = ({
  element,
  context,
  parser,
}: StaticSelectElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  const options = useMemo<[string, string][]>(
    () =>
      element.options.map((option, i) => [
        option.value,
        fromTextObjectToString(parser, option.text, i, context) ?? '',
      ]),
    [element.options, parser, context]
  );

  const handleChange = useCallback(
    (value) => {
      action({ target: { value } });
    },
    [action]
  );

  return (
    <SelectFiltered
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

export default memo(StaticSelectElement);
