import React, { useContext, useState } from 'react';
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
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const { action, appId: appIdFromContext, viewId, state, errors } = useContext(kitContext);
  const error = errors && actionId && errors[actionId];

  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return [{ loading, setLoading, error }, async ({ target: { value } }) => {
      setLoading(true);
      await action({ blockId, appId: appId || appIdFromContext, actionId, value, viewId });
      setLoading(false);
    }];
  }

  return [{ loading, setLoading, value, error }, async ({ target: { value } }) => {
    setValue(value);
    setLoading(true);
    await state({ blockId, appId, actionId, value });
    setLoading(false);
  }];
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
