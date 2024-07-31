import type { ImgHTMLAttributes } from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

/** @public */
export type MessageGenericPreviewImageProps = {
  url: string;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

/** @public */
const MessageGenericPreviewImage = ({
  url,
  className,
  ...props
}: MessageGenericPreviewImageProps) => (
  <img
    src={url}
    className={prependClassName(
      className,
      'rcx-message-generic-preview__image'
    )}
    alt=''
    {...props}
  />
);

export default MessageGenericPreviewImage;
