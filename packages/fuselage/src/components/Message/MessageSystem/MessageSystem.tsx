import type {
  ReactNode,
  MouseEvent as ReactMouseEvent,
  AllHTMLAttributes,
} from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

export type MessageSystemProps = {
  children?: ReactNode;
  title?: string;
  isSelected?: boolean;
  onClick?: (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
} & AllHTMLAttributes<HTMLDivElement>;

const MessageSystemFrame = styled(RcxView, {
  name: 'MessageSystem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginInline: 2,
  paddingBlock: 8,
  paddingInline: 20,
  color: '$fontDefault',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: '$surfaceSelected',
      },
    },
  } as const,
});

const MessageSystem = ({
  children,
  title,
  isSelected,
  ...props
}: MessageSystemProps) => (
  <MessageSystemFrame
    title={title}
    isSelected={isSelected || undefined}
    {...(props as any)}
  >
    {children}
  </MessageSystemFrame>
);

export default MessageSystem;
