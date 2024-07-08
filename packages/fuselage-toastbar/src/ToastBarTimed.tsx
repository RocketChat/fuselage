import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import type { ToastBarPayload } from './ToastBarContext';
import { useToastBarDismiss } from './ToastBarContext';

const ToastBarTimed = ({
  time,
  type,
  id,
  message,
}: ToastBarPayload): ReactElement => {
  const timeInSeconds = time * 1000;
  const [shouldPause, setShouldPause] = useState(false);
  const dismissToastMessage = useToastBarDismiss();

  useEffect(() => {
    const initialTime = Date.now();
    const interval = setInterval(() => {
      if (shouldPause) {
        return;
      }

      if (Date.now() - initialTime >= timeInSeconds) {
        dismissToastMessage(id);
      }
    }, timeInSeconds);

    return () => clearInterval(interval);
  }, [shouldPause]);

  return (
    <ToastBar
      variant={type}
      onMouseEnter={() => setShouldPause(true)}
      onMouseLeave={() => setShouldPause(false)}
      children={message}
      onClose={dismissToastMessage}
      id={id}
      time={time}
    />
  );
};

export default ToastBarTimed;
