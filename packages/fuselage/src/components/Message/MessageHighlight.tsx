import { css } from '@rocket.chat/css-in-js';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type MessageHighlightProps = {
  is?: ElementType;
  clickable?: boolean;
  variant?: 'critical' | 'relevant' | 'other' | 'link';
  className?: string;
  children: ReactNode;
  title?: string;
} & HTMLAttributes<HTMLElement>;

const variantStyles = {
  critical: css`
    color: var(--fontPureWhite);
    &::before {
      background-color: var(--badgeLevel4);
    }
  `,
  relevant: css`
    color: var(--fontPureWhite);
    &::before {
      background-color: var(--badgeLevel3);
    }
  `,
  other: css`
    color: var(--fontDefault);
    &::before {
      background-color: var(--badgeLevel0);
    }
  `,
  link: css`
    color: var(--fontInfo);
    &::before {
      background-color: var(--badgeLevel0);
    }
  `,
};

const baseStyle = css`
  position: relative;
  z-index: 1;
  display: inline-block;
  padding-inline: 2px;
  white-space: nowrap;
  word-break: keep-all;
  font-weight: 500;
  &::before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 18px;
    content: '';
    transform: translateY(1px) translateX(-2px);
    border-radius: var(--rcx-border-radius-medium, 4px);
  }
`;

const clickableStyle = css`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function MessageHighlight({
  is: Tag = 'span',
  variant = 'other',
  className,
  clickable,
  ...props
}: MessageHighlightProps) {
  return (
    <Tag
      className={[
        'rcx-box rcx-box--full',
        baseStyle,
        variantStyles[variant],
        clickable && clickableStyle,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}

export default MessageHighlight;
