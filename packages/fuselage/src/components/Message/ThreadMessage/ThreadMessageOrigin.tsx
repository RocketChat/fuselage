import type { ReactNode } from 'react';
import React from 'react';

type ThreadMessageOriginProps = {
  children?: ReactNode;
  system?: boolean;
};

export const ThreadMessageOrigin = ({
  children,
  system,
}: ThreadMessageOriginProps) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-message-thread__origin',
      system && 'rcx-box rcx-box--full rcx-message-thread__origin--system',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);
