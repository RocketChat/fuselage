import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import React, { useEffect } from 'react';

import type { ToastBarPayload } from './ToastBarContext';
import { useToastBarDismiss } from './ToastBarContext';

type ToastBarTimedProps = ToastBarPayload & {
  time: number;
};

const ToastBarTimed = ({
  time,
  type,
  id,
  message,
}: ToastBarTimedProps): ReactElement => {
  const dismissToastMessage = useToastBarDismiss();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dismissToastMessage(id);
    }, time * 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <ToastBar
      variant={type}
      children={message}
      onClose={dismissToastMessage}
      time={time}
    />
  );
};

export default ToastBarTimed;
