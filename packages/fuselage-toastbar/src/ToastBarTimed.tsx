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
  const dismissToastMessage = useToastBarDismiss();

  const [hovering, setHovering] = useState(false);

  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (hovering) {
        setTimedOut(true);
        return;
      }

      dismissToastMessage(id);
    }, time * 1000);

    return () => clearTimeout(timeOut);
  }, [hovering]);

  const onMouseLeave = () => {
    if (timedOut) {
      dismissToastMessage(id);
      return;
    }

    setHovering(false);
  };

  return (
    <ToastBar
      variant={type}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onMouseLeave}
      children={message}
      onClose={dismissToastMessage}
      id={id}
      time={time}
    />
  );
};

export default ToastBarTimed;
