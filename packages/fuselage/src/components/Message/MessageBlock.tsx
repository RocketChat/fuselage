import React, { AllHTMLAttributes, FC } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export const MessageBlock: FC<AllHTMLAttributes<HTMLDivElement>> =
  function MessageBlock({ className, ...props }) {
    return (
      <div
        className={
          prependClassName(
            className,
            'rcx-box rcx-box--full rcx-message-block'
          ) as any
        }
        {...props}
      />
    );
  };
