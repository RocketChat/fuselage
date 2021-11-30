import React, { FC } from 'react';
import './MessagePreview.styles.scss';

export const MessagePreview: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} className='rcx-message-generic-preview' />;
