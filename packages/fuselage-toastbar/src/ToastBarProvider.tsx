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

// import { ToastBar } from '@rocket.chat/fuselage';
import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactNode, ReactElement } from 'react';
import React, { useState, memo } from 'react';

// import { modal } from '../../app/ui-utils/client/lib/modal';
// import ModalBackdrop from '../components/modal/ModalBackdrop';
import type { ToastBarPayload } from './ToastBarContext';
import { ToastBarContext } from './ToastBarContext';
import ToastBarPortal from './ToastBarPortal';
// import { useImperativeModal } from '../views/hooks/useImperativeModal';

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

  console.log(toasts);

  // useImperativeModal(setCurrentModal);

  // const handleDismiss = useCallback(
  //   () => setCurrentModal(null),
  //   [setCurrentModal]
  // );

  console.log(ToastBar);

  return (
    <ToastBarContext.Provider value={contextValue}>
      {children}
      <ToastBarPortal>
        {/* <ToastBar>Test</ToastBar> */}
        {/* <>
          {toasts?.map((toast, index) => (
            <ToastBar
              key={index}
              variant={toast.type}
              children={toast.message}
            />
          ))}
        </> */}
        {JSON.stringify(toasts)}
        <ToastBar children='Lorem Ipsum' />
        {/* <ModalBackdrop onDismiss={handleDismiss}>
            {currentModal}
          </ModalBackdrop> */}
        {/* {currentToast} */}
      </ToastBarPortal>
    </ToastBarContext.Provider>
  );
};

export default memo<typeof ToastBarProvider>(ToastBarProvider);
