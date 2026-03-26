import type { ImgHTMLAttributes } from 'react';

export type MessageGenericPreviewImageProps = {
  url: string;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

const MessageGenericPreviewImage = ({
  url,
  className: _className,
  ...props
}: MessageGenericPreviewImageProps) => (
  <img
    src={url}
    className='rcx-box'
    style={{
      width: 'fit-content',
      maxWidth: 'inherit',
      maxHeight: 'inherit',
      cursor: 'pointer',
    }}
    alt=''
    {...props}
  />
);

export default MessageGenericPreviewImage;
