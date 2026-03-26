import { css } from '@rocket.chat/css-in-js';
import type { ReactNode } from 'react';

export type MessageDividerProps = {
  children?: ReactNode;
  unreadLabel?: string;
};

const dividerStyle = css`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-bottom: -1px;
  padding-inline: 20px;
  font-family: var(--f-family-body);
  font-size: var(--f-font-size-c2, 12px);
  font-weight: var(--f-font-weight-c2, 700);
  line-height: var(--f-line-height-c2, 16px);
  color: var(--fontDefault);
`;

const barStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  &::after {
    flex-grow: 1;
    height: 1px;
    content: '';
    background: var(--strokeExtraLight);
  }
`;

const barUnreadStyle = css`
  &::after {
    background: var(--strokeError);
  }
`;

const wrapperStyle = css`
  margin-block: 8px;
  padding-inline: 8px;
  background-color: var(--surfaceRoom);
`;

const wrapperUnreadStyle = css`
  position: absolute;
  z-index: 1;
  order: 1;
  padding-inline-start: 8px;
  color: var(--fontDanger);
  background-color: var(--surfaceRoom);
`;

const MessageDivider = ({
  children,
  unreadLabel,
  ...props
}: MessageDividerProps) => (
  <div
    role='separator'
    className={['rcx-box rcx-box--full', dividerStyle].join(' ')}
    {...props}
  >
    {children && (
      <>
        <div className={barStyle} />
        <div className={wrapperStyle}>{children}</div>{' '}
      </>
    )}
    <div
      className={[barStyle, unreadLabel ? barUnreadStyle : '']
        .filter(Boolean)
        .join(' ')}
    >
      {unreadLabel && (
        <div className={wrapperUnreadStyle}>{unreadLabel}</div>
      )}
    </div>
  </div>
);

export default MessageDivider;
