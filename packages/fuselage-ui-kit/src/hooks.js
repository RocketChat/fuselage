import React, { useContext, useState, useCallback } from 'react';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';

export const defaultContext = {
  action: (...args) => console.log(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  errors: {},
};

export const kitContext = React.createContext(defaultContext);

export const useBlockContext = ({ blockId, actionId, appId, initialValue }, context) => {
  const { action, appId: appIdFromContext, viewId, state, errors, values = {} } = useContext(kitContext);
  const { value: _value = initialValue } = values[actionId] || {};
  const [value, setValue] = useState(_value);
  const [loading, setLoading] = useState(false);

  const error = errors && actionId && errors[actionId];

  const actionFunction = useCallback(async ({ target: { value } }) => {
    setLoading(true);
    await action({ blockId, appId: appId || appIdFromContext, actionId, value, viewId });
    setLoading(false);
  }, [actionId, blockId]);

  const stateFunction = useCallback(async ({ target: { value } }) => {
    setValue(value);
    await state({ blockId, appId, actionId, value });
  }, [actionId, blockId]);

  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return [{ loading, setLoading, error }, actionFunction];
  }

  return [{ loading, setLoading, value, error }, stateFunction];
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
