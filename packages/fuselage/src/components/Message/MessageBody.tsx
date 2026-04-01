import { styled } from '@tamagui/core';
import type { HTMLAttributes } from 'react';

import { RcxText, RcxView } from '../../primitives';

export type MessageBodyProps = HTMLAttributes<HTMLDivElement> & {
  clamp?: 2 | 3 | 4;
};

const MessageBodyFrame = styled(RcxView, {
  name: 'MessageBody',

  overflow: 'hidden',
  flexShrink: 1,
  opacity: 1,

  variants: {
    clamp: {
      2: {
        display: '-webkit-box' as any,
        overflow: 'hidden',
        // @ts-expect-error — vendor prefix, not in CSSProperties
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      },
      3: {
        display: '-webkit-box' as any,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
      },
      4: {
        display: '-webkit-box' as any,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 4,
      },
    },
  } as const,
});

const MessageBodyText = styled(RcxText, {
  name: 'MessageBodyText',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  color: '$fontDefault',
});

/**
 * Descendant styles (h1–h4, ul/ol, blockquote, task-list) can't be
 * expressed with Tamagui styled(). We use a plain CSS class injected
 * via the SCSS pipeline (styles/primitives) for those.
 *
 * The base container props (font, margin, overflow, clamp) are handled
 * by the Tamagui frame above.
 */
const MessageBody = ({
  clamp,
  className,
  style,
  children,
  ...props
}: MessageBodyProps) => (
  <MessageBodyFrame
    clamp={clamp}
    className={['rcx-message-body', className].filter(Boolean).join(' ')}
    style={{
      wordBreak: 'break-word',
      transition: 'opacity 0.3s linear',
      ...style,
    }}
    {...(props as any)}
  >
    <MessageBodyText>{children}</MessageBodyText>
  </MessageBodyFrame>
);

export default MessageBody;
