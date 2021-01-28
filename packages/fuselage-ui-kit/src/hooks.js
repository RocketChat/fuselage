import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { BlockContext } from '@rocket.chat/ui-kit';
import { createContext, useContext, useMemo, useState } from 'react';

export const defaultContext = {
  action: (...args) => console.log(JSON.stringify(args)),
  state: console.log,
  appId: 'core',
  errors: {},
};

export const kitContext = createContext(defaultContext);

export const useUiKitState = (
  { blockId, actionId, appId, initialOption, initialValue },
  context
) => {
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
  const [value, setValue] = useState(_value);
  const [loading, setLoading] = useState(false);

  const error = errors && actionId && errors[actionId];

  const actionFunction = useMutableCallback(async ({ target: { value } }) => {
    setLoading(true);
    setValue(value);
    state && (await state({ blockId, appId, actionId, value }));
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
    await state({ blockId, appId: appId || appIdFromContext, actionId, value });
  });

  const result = useMemo(() => ({ loading, setLoading, error, value }), [
    loading,
    setLoading,
    error,
    value,
  ]);

  if ([BlockContext.SECTION, BlockContext.ACTION].includes(context)) {
    return [result, actionFunction];
  }

  return [result, stateFunction];
};

export const getStyle = (style) => {
  switch (style) {
    case 'primary':
    case 'danger':
      return {
        [style]: true,
      };
  }
};
