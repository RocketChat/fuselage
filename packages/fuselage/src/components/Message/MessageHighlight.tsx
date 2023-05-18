import type { ElementType } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export type MessageHighlightProps = {
  is?: ElementType;
  clickable?: boolean;
  variant?: 'critical' | 'relevant' | 'other';
  className?: string;
  children: any;
  title?: string;
};

function MessageHighlight({
  is: Tag = 'span',
  variant = 'other',
  className,
  clickable,
  ...props
}: MessageHighlightProps) {
  const modifiers = [variant, clickable && 'clickable']
    .filter(Boolean)
    .map((modifier) => `rcx-message__highlight--${modifier}`)
    .join(' ');

  return (
    <Tag
      className={prependClassName(
        className,
        `rcx-box rcx-box--full rcx-message__highlight ${modifiers}`
      )}
      {...props}
    />
  );
}

export default MessageHighlight;
