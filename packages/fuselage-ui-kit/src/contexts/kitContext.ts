import { createContext } from 'react';

type ActionParams = {
  blockId: string;
  appId: string;
  actionId: string;
  value: unknown;
  viewId?: string;
};

type UiKitContext = {
  action: (state: ActionParams) => void;
  state: (state: ActionParams) => void;
  appId: string;
  errors: Record<string, string>;
  values: Record<string, { value: string }>;
  viewId?: string;
};
export const defaultContext = {
  action: console.log,
  state: console.log,
  appId: 'core',
  errors: {},
  values: {},
};

export const kitContext = createContext<UiKitContext>(defaultContext);
