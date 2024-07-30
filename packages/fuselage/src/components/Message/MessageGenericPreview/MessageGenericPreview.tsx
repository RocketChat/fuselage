import type { HTMLAttributes } from 'react';
import React from 'react';
import './MessageGenericPreview.styles.scss';

/** @public */
export type MessageGenericPreviewProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageGenericPreview = (props: MessageGenericPreviewProps) => (
  <div className='rcx-message-generic-preview' {...props} />
);

export default MessageGenericPreview;
