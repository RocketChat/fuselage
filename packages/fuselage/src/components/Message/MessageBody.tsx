import type { AllHTMLAttributes, ReactElement } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

type MessageBodyProps = AllHTMLAttributes<HTMLDivElement> & {
  clamp?: 2 | 3 | 4;
};

export const MessageBody = ({
  clamp,
  className,
  ...props
}: MessageBodyProps): ReactElement => (
  <div
    className={
      prependClassName(
        className,
        [
          'rcx-message-body',
          clamp && `rcx-message-body--clamp rcx-message-body--clamp-${clamp}`,
        ]
          .filter(Boolean)
          .join(' ')
      ) as string
    }
    {...props}
  />
);
