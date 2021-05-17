import React, {
  ComponentProps,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import './Messages.styles.scss';

import { Tag, Divider } from '..';
import { prependClassName } from '../../helpers/prependClassName';
import { Box, useArrayLikeClassNameProp } from '../Box';
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

export const MessageLeftContainer: FC = function MessageLeftContainer(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
      {...props}
    />
  );
};

const Header: FC = function Header({ children }) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-header'>
      <div className='rcx-box rcx-box--full rcx-message-header__wrapper'>
        {children}
      </div>
    </div>
  );
};

const Body: FC<{
  clamp?: 2 | 3 | 4;
  className?: string | string[];
}> = function Body({ clamp, className, ...props }) {
  return (
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
};

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

type MessageProps = ComponentProps<typeof Box> & {
  clickable?: true | false;
  sequential?: boolean;
};

export const Message: ForwardRefExoticComponent<MessageProps> = forwardRef(
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
        className={
          prependClassName(
            useArrayLikeClassNameProp({ className }).className,
            [
              'rcx-message',
              (clickable || props.onClick) && 'rcx-message--clickable',
              sequential && 'rcx-message--sequential',
            ]
              .filter(Boolean)
              .join(' ')
          ) || ''
        }
        {...(props as any)}
      />
    );
  }
);

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
      disabled={null}
      medium={null}
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

Object.assign(Message, {
  Metrics,
  Toolbox,
  Container,
  ContainerFixed,
  LeftContainer: MessageLeftContainer,
  Header,
  Body,
  Block: MessageBlock,
  Timestamp,
  Name,
  Username,
  Roles,
  Role,
  Divider,
});
