import type { AllHTMLAttributes } from 'react';
import React from 'react';

type MessageNamesProps = AllHTMLAttributes<HTMLSpanElement>;

export const MessageNames = (props: MessageNamesProps) => (
  <span
    className='rcx-box rcx-box--full rcx-message-header__names'
    {...props}
  />
);
