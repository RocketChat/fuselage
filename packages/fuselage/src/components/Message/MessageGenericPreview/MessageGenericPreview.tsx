import React, { FC } from 'react';
import './MessageGenericPreview.styles.scss';

export const MessageGenericPreview: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div className='rcx-message-generic-preview' {...props} />;
