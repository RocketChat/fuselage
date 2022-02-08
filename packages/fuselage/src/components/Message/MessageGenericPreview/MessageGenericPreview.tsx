import React, { HTMLAttributes } from 'react';
import './MessageGenericPreview.styles.scss';

export const MessageGenericPreview = (
  props: HTMLAttributes<HTMLDivElement>
) => <div className='rcx-message-generic-preview' {...props} />;
