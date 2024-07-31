import type { HTMLAttributes, ReactElement } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

type MessageBodyProps = HTMLAttributes<HTMLDivElement> & {
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
