import React, { FC } from 'react';

type MessagePreviewLinkProps = {
  url?: string;
  uncolored?: boolean;
};

export const MessagePreviewLink: FC<MessagePreviewLinkProps> = ({
  url,
  uncolored,
  ...props
}) => (
  <a
    className={[
      'rcx-message-generic-preview__link',
      uncolored && 'rcx-message-generic-preview__link--uncolored',
    ]
      .filter(Boolean)
      .join(' ')}
    href={url}
    target='_blank'
    {...props}
  />
);
