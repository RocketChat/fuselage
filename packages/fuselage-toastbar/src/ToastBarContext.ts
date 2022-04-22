import { createContext, useContext } from 'react';

export type ToastBarPayload = {
  type: 'success' | 'info' | 'error';
  message: string | Error;
  title?: string;
  options?: object;
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
};

type ToastBarContextValue = {
  dispatch: (payload: ToastBarPayload) => void;
};

export const ToastBarContext = createContext<ToastBarContextValue>({
  dispatch: () => undefined,
});

export const useToastBarDispatch = (): ToastBarContextValue['dispatch'] =>
  useContext(ToastBarContext).dispatch;
