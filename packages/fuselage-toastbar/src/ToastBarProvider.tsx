import type { ReactNode, ReactElement } from 'react';
import React, { useState, memo } from 'react';

import type { ToastBarPayload } from './ToastBarContext';
import { ToastBarContext } from './ToastBarContext';
import ToastBarPortal from './ToastBarPortal';
import ToastBarTimed from './ToastBarTimed';
import ToastBarZone from './ToastBarZone';

type ToastBarProps = {
  children?: ReactNode;
};

const ToastBarProvider = ({ children }: ToastBarProps): ReactElement => {
  const [toasts, setToasts] = useState<ToastBarPayload[]>([]);

  const contextValue = {
    dispatch: (
      option: Omit<ToastBarPayload, 'id' | 'time'> & { time?: number }
    ) =>
      setToasts((toasts) => [
        ...toasts,
        { ...option, time: option.time || 5, id: Math.random().toString() },
      ]),
    dismiss: (id: ToastBarPayload['id']) =>
      setToasts((prevState) => prevState.filter((toast) => toast.id !== id)),
  };

  return (
    <ToastBarContext.Provider value={contextValue}>
      {children}
      <ToastBarPortal>
        {Object.entries(
          toasts?.reduce((zones, toast) => {
            zones[toast.position || 'top-end'] =
              zones[toast.position || 'top-end'] || [];
            zones[toast.position || 'top-end'].push(toast);
            return zones;
          }, {} as Record<'top-start' | 'top-end' | 'bottom-start' | 'bottom-end', ToastBarPayload[]>)
        ).map(([zone, toasts]) => (
          <ToastBarZone
            key={zone}
            position={zone as ToastBarPayload['position']}
          >
            {toasts.map((toast) => (
              <ToastBarTimed key={toast.id} {...toast} />
            ))}
          </ToastBarZone>
        ))}
      </ToastBarPortal>
    </ToastBarContext.Provider>
  );
};

export default memo<typeof ToastBarProvider>(ToastBarProvider);
