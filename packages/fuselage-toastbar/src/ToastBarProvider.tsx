// import React, { FC, useEffect } from 'react';
// // import toastr from 'toastr';

// import { ToastBarContext } from './ToastBarContext';
// // import { dispatchToastMessage, subscribeToToastMessages } from '../lib/toast';
// // import { handleError } from '../lib/utils/handleError';

// const contextValue = {
//   dispatch: dispatchToastMessage,
// };

// const ToastBarProvider: FC = ({ children }) => {
//   // useEffect(
//   //   () =>
//   //     subscribeToToastMessages(({ type, message, title, options }) => {
//   //       if (type === 'error' && typeof message === 'object') {
//   //         handleError(message);
//   //         return;
//   //       }

//   //       if (typeof message !== 'string') {
//   //         message = `[${message.name}] ${message.message}`;
//   //       }

//   //       toastr[type](message, title, options);
//   //     }),
//   //   []
//   // );

//   return <ToastBarContext.Provider children={children} value={contextValue} />;
// };

// export default ToastBarProvider;

import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactNode, ReactElement } from 'react';
import React, { useState, memo } from 'react';

import type { ToastBarPayload } from './ToastBarContext';
import { ToastBarContext } from './ToastBarContext';
import ToastBarPortal from './ToastBarPortal';
import ToastBarZone from './ToastBarZone';

type ToastBarProps = {
  children?: ReactNode;
};

const ToastBarProvider = ({ children }: ToastBarProps): ReactElement => {
  const [toasts, setToasts] = useState<ToastBarPayload[]>([]);
  // const [currentToast, setCurrentToast] = useState<ReactNode>(null);

  const contextValue = {
    dispatch: (option: ToastBarPayload) =>
      setToasts((toasts) => [...toasts, option]),
  };

  // useImperativeModal(setCurrentModal);

  // const handleDismiss = useCallback(
  //   () => setCurrentModal(null),
  //   [setCurrentModal]
  // );

  return (
    <ToastBarContext.Provider value={contextValue}>
      {children}
      <ToastBarPortal>
        <ToastBarZone>
          {toasts?.map((toast, index) => (
            <ToastBar
              key={index}
              variant={toast.type}
              children={toast.message}
            />
          ))}
        </ToastBarZone>

        {/* <ModalBackdrop onDismiss={handleDismiss}>
            {currentModal}
          </ModalBackdrop> */}
        {/* {currentToast} */}
      </ToastBarPortal>
    </ToastBarContext.Provider>
  );
};

export default memo<typeof ToastBarProvider>(ToastBarProvider);
