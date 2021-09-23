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
import { Divider } from './Divider';
import { Metrics } from './Metrics';
import { Toolbox } from './Toolbox';

const Container: FC = function Container(props) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-container' {...props} />
  );
};

const ContainerFixed: FC = function Container(props) {
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

const Header: FC = function Header({ children }) {
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

const MessageBody = ({
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

const Message = forwardRef<HTMLDivElement, MessageProps>(function Message(
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
});

const Timestamp: FC<{ children: string }> = function Timestamp(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__time'
      {...props}
    />
  );
};

const Name: FC<{ children: string }> = function Name(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__name'
      {...props}
    />
  );
};
const Username: FC<{ children: string }> = function Name(props) {
  return (
    <span
      className='rcx-box rcx-box--full rcx-message-header__username'
      {...props}
    />
  );
};

const Role: FC<{ children: string }> = function Role(props) {
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

const Roles: FC = function Role(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-header__roles'
      {...props}
    />
  );
};

export default Object.assign(Message, {
  Metrics,
  Toolbox,
  Container,
  ContainerFixed,
  LeftContainer: MessageLeftContainer,
  Header,
  Body: MessageBody,
  Block: MessageBlock,
  Timestamp,
  Name,
  Username,
  Roles,
  Role,
  Divider,
});
