import { css } from '@rocket.chat/css-in-js';
import type { HTMLAttributes } from 'react';

export type MessageBodyProps = HTMLAttributes<HTMLDivElement> & {
  clamp?: 2 | 3 | 4;
};

const bodyStyle = css`
  margin-block: 2px;
  font-family: var(--f-family-body);
  font-size: var(--f-font-size-p2, 14px);
  font-weight: var(--f-font-weight-p2, 400);
  line-height: var(--f-line-height-p2, 20px);
  overflow: hidden;
  flex-shrink: 1;
  transition: opacity 0.3s linear;
  word-break: break-word;
  opacity: 1;
  color: var(--fontDefault);

  & h1 {
    font-size: var(--f-font-size-h1, 32px);
    font-weight: var(--f-font-weight-h1, 700);
    line-height: var(--f-line-height-h1, 40px);
  }
  & h2 {
    font-size: var(--f-font-size-h2, 24px);
    font-weight: var(--f-font-weight-h2, 700);
    line-height: var(--f-line-height-h2, 32px);
  }
  & h3 {
    font-size: var(--f-font-size-h3, 20px);
    font-weight: var(--f-font-weight-h3, 700);
    line-height: var(--f-line-height-h3, 28px);
  }
  & h4 {
    font-size: var(--f-font-size-h4, 16px);
    font-weight: var(--f-font-weight-h4, 700);
    line-height: var(--f-line-height-h4, 24px);
  }
  & ul,
  ol {
    margin: 0;
    padding-block: 4px 0;
    padding-inline: 0;
    list-style: none;
  }
  & ul li::before {
    padding: 0 8px;
    content: '\u2022';
    font-weight: bold;
  }
  & ol li::before {
    padding: 0 8px;
    content: attr(value) '.';
    font-weight: bold;
  }
  & blockquote {
    padding-inline: 8px;
    border: 1px solid var(--strokeExtraLight);
    border-radius: 2px;
    background-color: var(--surfaceTint);
    border-inline-start-color: var(--strokeMedium);
  }
  & blockquote:hover,
  & blockquote:focus {
    border-color: var(--strokeLight);
    background-color: var(--surfaceHover);
    border-inline-start-color: var(--strokeMedium);
  }
  & ul.task-list {
    margin-inline-start: 0;
    padding-inline-start: 0;
    list-style: none;
  }
  & ul.task-list > li::before {
    display: none;
  }
`;

const clampStyle = css`
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const clamp3Style = css`
  -webkit-line-clamp: 3;
`;

const clamp4Style = css`
  -webkit-line-clamp: 4;
`;

const MessageBody = ({ clamp, className, ...props }: MessageBodyProps) => (
  <div
    className={[
      'rcx-box rcx-box--full',
      bodyStyle,
      clamp && clampStyle,
      clamp === 3 && clamp3Style,
      clamp === 4 && clamp4Style,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

export default MessageBody;
