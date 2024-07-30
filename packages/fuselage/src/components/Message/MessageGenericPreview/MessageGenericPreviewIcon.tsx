import React from 'react';

import type { IconProps } from '../../Icon';
import { Icon } from '../../Icon';

/** @public */
export type MessageGenericPreviewIconProps = IconProps & {
  type: string;
};

/** @public */
const MessageGenericPreviewIcon = ({
  name = 'attachment-file',
  size = 32,
  color = 'default',
  type = 'file',
}: MessageGenericPreviewIconProps) => (
  <div className='rcx-message-generic-preview__icon'>
    <Icon name={name} color={color} size={size} />
    <div className='rcx-message-generic-preview__icon-title'>{type}</div>
  </div>
);

export default MessageGenericPreviewIcon;
