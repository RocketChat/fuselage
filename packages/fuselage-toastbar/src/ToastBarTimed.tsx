import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { useCountdown } from 'react-timing-hooks';

import type { ToastBarPayload } from './ToastBarContext';
import { useToastBarDismiss } from './ToastBarContext';

const ToastBarTimed = ({
  time,
  type,
  id,
  message,
  isPersistent,
}: ToastBarPayload): ReactElement => {
  const dismissToastMessage = useToastBarDismiss();

  const [, { isPaused, pause, resume }] = useCountdown(time, 0, {
    onEnd: () => dismissToastMessage(id),
    startOnMount: true,
  });

  useEffect(() => {
    if (isPersistent) {
      pause();
    }

    return () => {
      if (isPersistent) {
        resume();
      }
    };
  }, [isPersistent, pause, resume]);

  return (
    <ToastBar
      variant={type}
      onPointerEnter={() => pause()}
      onPointerLeave={() => resume()}
      children={message instanceof Error ? String(message) : message}
      onClose={isPersistent ? undefined : dismissToastMessage}
      id={id}
      time={time}
      isPaused={isPaused}
    />
  );
};

export default ToastBarTimed;
