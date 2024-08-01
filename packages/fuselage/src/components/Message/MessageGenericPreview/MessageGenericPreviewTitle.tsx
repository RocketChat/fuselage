import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type MessageGenericPreviewTitleProps = {
  children?: ReactNode;
  externalUrl?: string;
} & HTMLAttributes<HTMLSpanElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const MessageGenericPreviewTitle = ({
  externalUrl,
  ...props
}: MessageGenericPreviewTitleProps) =>
  externalUrl ? (
    <span>
      <a
        className='rcx-message-generic-preview__title rcx-message-generic-preview__title-link'
        href={externalUrl}
        target='_blank'
        {...props}
      />
    </span>
  ) : (
    <span className='rcx-message-generic-preview__title' {...props} />
  );
