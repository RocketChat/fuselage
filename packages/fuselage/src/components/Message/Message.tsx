import type { AllHTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

import './Messages.styles.scss';

import { prependClassName } from '../../helpers/prependClassName';

type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: true | false;
  sequential?: boolean;
  className?: string;
  isSelected?: boolean;
  isEditing?: boolean;
};

export const Message = forwardRef(function Message(
  {
    className,
    clickable,
    sequential,
    isSelected,
    isEditing,
    ...props
  }: MessageProps,
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
          isSelected && 'rcx-message--selected',
          isEditing && 'rcx-message--editing',
        ]
          .filter(Boolean)
          .join(' ')
      )}
      {...props}
    />
  );
});
