import type { AllHTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

import './Messages.styles.scss';

import { prependClassName } from '../../helpers/prependClassName';

type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: true | false;
  sequential?: boolean;
  className?: string;
};

export const Message = forwardRef(function Message(
  { className, clickable, sequential, ...props }: MessageProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={prependClassName(
        className,
        [
          'rcx-message',
          (clickable || props.onClick) && 'rcx-message--clickable',
          sequential && 'rcx-message--sequential',
        ]
          .filter(Boolean)
          .join(' ')
      )}
      {...props}
    />
  );
});
