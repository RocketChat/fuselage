import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import React from 'react';

import './MessageSystem.styles.scss';

type MessageSystemProps = {
  children?: ReactNode;
  title?: string;
  onClick?: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const MessageSystem = ({
  children,
  title,
  ...rest
}: MessageSystemProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-system'
    title={title}
    {...rest}
  >
    {children}
  </div>
);
