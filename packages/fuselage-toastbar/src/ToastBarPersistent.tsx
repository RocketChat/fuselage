import { ToastBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';

import type { ToastBarPayload } from './ToastBarContext';

const ToastBarPersistent = ({
  type,
  message,
  title,
  id,
}: ToastBarPayload): ReactElement => {
  return (
    <ToastBar variant={type} id={id} isPaused>
      {title}
      {message instanceof Error ? String(message) : message}
    </ToastBar>
  );
};

export default ToastBarPersistent;
