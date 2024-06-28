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

  const visibleFor = time * 1000;

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      if (hovering) {
        return;
      }

      if (Date.now() - start >= visibleFor) {
        dismissToastMessage(id);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <ToastBar
      variant={type}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      children={message}
      onClose={dismissToastMessage}
      id={id}
      time={time}
    />
  );
};

export default ToastBarTimed;
