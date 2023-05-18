import type { ComponentProps } from 'react';
import React from 'react';

import MessageHighlight from './MessageHighlight';

type MessageMentionProps = {
  tag?: '#' | '@';
  innerClassName?: string;
} & ComponentProps<typeof MessageHighlight>;

function MessageMention({
  tag,
  className = '',
  innerClassName,
  ...props
}: MessageMentionProps) {
  return (
    <span className={`${className} rcx-message__mention`}>
      {tag}
      <MessageHighlight className={innerClassName} {...props} />
    </span>
  );
}

export default MessageMention;
