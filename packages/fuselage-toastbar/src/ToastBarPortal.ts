import type { ReactElement, ReactNode } from 'react';
import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { createAnchor } from './lib/utils/createAnchor';
import { deleteAnchor } from './lib/utils/deleteAnchor';

type ToastBarPortalProps = {
  children?: ReactNode;
};

const ToastBarPortal = ({ children }: ToastBarPortalProps): ReactElement => {
  const [toastBarRoot] = useState(() => createAnchor('toastBarRoot'));
  useEffect(() => (): void => deleteAnchor(toastBarRoot), [toastBarRoot]);
  return createPortal(children, toastBarRoot);
};

export default memo(ToastBarPortal);
