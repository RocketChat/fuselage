import React, {
  AllHTMLAttributes,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';

import './Messages.styles.scss';

import { prependClassName } from '../../helpers/prependClassName';
import { Tag } from '../Tag';
import { MessageDivider } from './MessageDivider';
import { MessageMetrics } from './MessageMetrics';
import { MessageToolbox } from './MessageToolbox';

export const MessageContainer: FC = function MessageContainer(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-container' {...props} />
  );
};

export const MessageContainerFixed: FC = function MessageContainerFixed(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-container rcx-message-container--fixed'
      {...props}
    />
  );
};

type MessageLeftContainerProps = {
  children?: ReactNode;
};

export const MessageLeftContainer = (
  props: MessageLeftContainerProps
): ReactElement => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
    {...props}
  />
);

export const MessageHeader: FC = function MessageHeader({ children }) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-header'>
      <div className='rcx-box rcx-box--full rcx-message-header__wrapper'>
        {children}
      </div>
    </div>
  );
};

type MessageBodyProps = AllHTMLAttributes<HTMLDivElement> & {
  clamp?: 2 | 3 | 4;
};

export const MessageBody = ({
  clamp,
  className,
  ...props
}: MessageBodyProps): ReactElement => (
  <div
    className={
      prependClassName(
        className,
        [
          'rcx-message-body',
          clamp && `rcx-message-body--clamp rcx-message-body--clamp-${clamp}`,
        ]
          .filter(Boolean)
          .join(' ')
      ) as string
    }
    {...props}
  />
);

export const MessageBlock: FC<{ className?: string }> = function MessageBlock({
  className,
  ...props
}) {
  return (
    <div
      className={
        prependClassName(
          className,
          'rcx-box rcx-box--full rcx-message-block'
        ) as any
      }
      {...props}
    />
  );
};

type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: true | false;
  sequential?: boolean;
};

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  function Message(
    {
      // is: Tag = 'div',
      className,
      clickable,
      sequential,
      ...props
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={prependClassName(
          className,
          [
            'rcx-message',
            (clickable || props.onClick) && 'rcx-message--clickable',
            sequential && 'rcx-message--sequential',
          ]
            .filter(Boolean)
            .join(' ')
        )}
        {...props}
      />
    );
  }
);

export const MessageTimestamp: FC<{ children: string }> =
  function MessageTimestamp(props) {
    return (
      <span
        className='rcx-box rcx-box--full rcx-message-header__time'
        {...props}
      />
    );
  };

export const MessageName: FC<{ children: string }> = function MessageName(
  props
) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__name'
      {...props}
    />
  );
};
export const MessageUsername: FC<{ children: string }> =
  function MessageUsername(props) {
    return (
      <span
        className='rcx-box rcx-box--full rcx-message-header__username'
        {...props}
      />
    );
  };

export const MessageRole: FC<{ children: string }> = function MessageRole(
  props
) {
  return (
    <Tag
      onClick={undefined}
      className='rcx-box rcx-box--full rcx-message-header__role'
      {...props}
      small
      disabled={undefined}
    />
  );
};

export const MessageRoles: FC = function MessageRoles(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-header__roles'
      {...props}
    />
  );
};

export default Object.assign(Message, {
  Metrics: MessageMetrics,
  Toolbox: MessageToolbox,
  Container: MessageContainer,
  ContainerFixed: MessageContainerFixed,
  LeftContainer: MessageLeftContainer,
  Header: MessageHeader,
  Body: MessageBody,
  Block: MessageBlock,
  Timestamp: MessageTimestamp,
  Name: MessageName,
  Username: MessageUsername,
  Roles: MessageRoles,
  Role: MessageRole,
  Divider: MessageDivider,
});
