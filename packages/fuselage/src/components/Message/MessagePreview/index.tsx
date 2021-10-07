import React, { FC } from 'react';
import './MessagePreview.styles.scss';

export * from './MessagePreviewContent';
export * from './MessagePreviewDescription';
export * from './MessagePreviewFooter';
export * from './MessagePreviewImage';
export * from './MessagePreviewLink';
export * from './MessagePreviewThumb';
export * from './MessagePreviewTitle';
export * from './MessatePreviewGenericFile';

export const MessagePreview: FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => <div {...props} className='rcx-message-generic-preview' />;
