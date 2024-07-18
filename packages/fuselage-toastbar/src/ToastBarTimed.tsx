import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useCountdown } from 'react-timing-hooks';

import type { ToastBarPayload } from './ToastBarContext';
import { useToastBarDismiss } from './ToastBarContext';

const ToastBarTimed = ({
  time,
  type,
  id,
  message,
}: ToastBarPayload): ReactElement => {
  const dismissToastMessage = useToastBarDismiss();

  const [, { isPaused, pause, resume }] = useCountdown(time, 0, {
    onEnd: () => dismissToastMessage(id),
    startOnMount: true,
  });

  return (
    <ToastBar
      variant={type}
      onPointerEnter={() => pause()}
      onPointerLeave={() => resume()}
      children={message}
      onClose={dismissToastMessage}
      id={id}
      time={time}
      isPaused={isPaused}
    />
  );
};

export default ToastBarTimed;
