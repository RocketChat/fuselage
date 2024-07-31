import type {
  ReactNode,
  MouseEvent as ReactMouseEvent,
  AllHTMLAttributes,
} from 'react';
import React from 'react';

import './MessageSystem.styles.scss';

/** @public */
export type MessageSystemProps = {
  children?: ReactNode;
  title?: string;
  isSelected?: boolean;
  onClick?: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
} & AllHTMLAttributes<HTMLDivElement>;

/** @public */
const MessageSystem = ({
  children,
  title,
  isSelected,
  ...props
}: MessageSystemProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-message-system',
      isSelected && 'rcx-message-system--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    title={title}
    {...props}
  >
    {children}
  </div>
);

export default MessageSystem;
