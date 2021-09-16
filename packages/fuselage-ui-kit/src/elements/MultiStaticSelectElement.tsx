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

export const MultiStaticSelectElement = ({
  element,
  context,
  parser,
}: MultiStaticSelectElementProps): ReactElement => {
  const [{ loading, value, error }, action] = useUiKitState(element, context);

  const { options, placeholder } = element;

  const _options = useMemo<readonly [string, string][]>(
    () =>
      options.map((option, i) => [
        option.value,
        fromTextObjectToString(parser, option.text, i, context) ?? '',
      ]),
    [context, options, parser]
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
      placeholder={fromTextObjectToString(parser, placeholder, 0, context)}
      onChange={handleChange}
    />
  );
};

export default memo(MultiStaticSelectElement);
