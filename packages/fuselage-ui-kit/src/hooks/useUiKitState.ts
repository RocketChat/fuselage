import { useMutableCallback, useSafely } from '@rocket.chat/fuselage-hooks';
import { BlockContext, Option } from '@rocket.chat/ui-kit';
import { ActionableElement } from '@rocket.chat/ui-kit/dist/esm/blocks/ActionableElement';
import { useContext, useMemo, useState } from 'react';

import { kitContext } from '../contexts/kitContext';

type UiKitState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error?: string;
  value: unknown;
};

export const useUiKitState: <T extends ActionableElement>(
  element: T & {
    initialValue?: string | undefined;
    initialOption?: Option | undefined;
    blockId: string;
    appId: string;
  },
  context?: BlockContext
) => [UiKitState, any] = (rest, context) => {
  const { blockId, actionId, appId, initialOption, initialValue } = rest;
  const {
    action,
    appId: appIdFromContext,
    viewId,
    state,
    errors,
    values = {},
  } = useContext(kitContext);

  const { value: _value = initialOption?.value ?? initialValue } =
    values[actionId] || {};
  const [value, setValue] = useSafely(useState(_value));
  const [loading, setLoading] = useSafely(useState(false));

  const error = errors && actionId && errors[actionId];

  const actionFunction = useMutableCallback(async ({ target: { value } }) => {
    setLoading(true);
    setValue(value);
    state && (await state({ blockId, appId, actionId, value, viewId }));
    await action({
      blockId,
      appId: appId || appIdFromContext,
      actionId,
      value,
      viewId,
    });
    setLoading(false);
  });

  const stateFunction = useMutableCallback(async ({ target: { value } }) => {
    setValue(value);
    await state({
      blockId,
      appId: appId || appIdFromContext,
      actionId,
      value,
      viewId,
    });
  });

  const result: UiKitState = useMemo(
    () => ({ loading, setLoading, error, value }),
    [loading, setLoading, error, value]
  );

  if (
    context &&
    [BlockContext.SECTION, BlockContext.ACTION].includes(context)
  ) {
    return [result, actionFunction];
  }

  return [result, stateFunction];
};
