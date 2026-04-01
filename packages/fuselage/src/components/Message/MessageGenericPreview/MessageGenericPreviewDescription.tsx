import { css } from '@rocket.chat/css-in-js';
import type { ReactNode } from 'react';

export type MessageGenericPreviewDescriptionProps = {
  children?: ReactNode;
  clamp?: boolean;
};

const baseStyle = css`
  font-family: var(--f-family-body);
  font-size: var(--f-font-size-c1, 12px);
  font-weight: var(--f-font-weight-c1, 400);
  line-height: var(--f-line-height-c1, 16px);
  margin-block-end: 4px;
  white-space: normal;
  color: var(--fontDefault);
`;

const truncatedStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const clampStyle = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const MessageGenericPreviewDescription = ({
  children,
  clamp = false,
}: MessageGenericPreviewDescriptionProps) => (
  <div
    className={['rcx-box', baseStyle, clamp ? clampStyle : truncatedStyle].join(
      ' ',
    )}
  >
    {children}
  </div>
);

export default MessageGenericPreviewDescription;
