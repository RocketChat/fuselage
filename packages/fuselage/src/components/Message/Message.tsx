import React, { AllHTMLAttributes, forwardRef } from 'react';

import './Messages.styles.scss';

import { prependClassName } from '../../helpers/prependClassName';

type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: true | false;
  sequential?: boolean;
  className?: string;
};

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  function Message({ className, clickable, sequential, ...props }, ref) {
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
  }
);
