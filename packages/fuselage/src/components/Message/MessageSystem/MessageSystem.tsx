import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import React from 'react';

import './MessageSystem.styles.scss';

type MessageSystemProps = {
  children?: ReactNode;
  title?: string;
  isSelected?: boolean;
  onClick?: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const MessageSystem = ({
  children,
  title,
  isSelected,
  ...rest
}: MessageSystemProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-message-system',
      isSelected && 'rcx-message-system--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    title={title}
    {...rest}
  >
    {children}
  </div>
);
