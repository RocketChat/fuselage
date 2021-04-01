import { Box, Margins, Tag } from '../';
import React, { FC } from 'react';

import './styles.scss';
import { BoxProps } from '@rocket.chat/fuselage';

import { Metrics } from './Metrics';
import { prependClassName } from '../../helpers/prependClassName';
import { useArrayLikeClassNameProp } from '../Box';

const Container: FC = function Container(props) {
  return <div className='rcx-message-container' {...props} />;
};

const ContainerFixed: FC = function Container(props) {
  return (
    <div
      className='rcx-message-container rcx-message-container--fixed'
      {...props}
    />
  );
};

const AvatarContainer: FC = function AvatarContainer(props) {
  return (
    <div
      className='rcx-message-container rcx-message-container--avatar'
      {...props}
    />
  );
};

const Header: FC = function Header({ children }) {
  return (
    <div className='rcx-message-header'>
      <div className='rcx-message-header__wrapper'>{children}</div>
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
          ['rcx-message-body', clamp && `rcx-message-body--clamp-${clamp}`]
            .filter(Boolean)
            .join(' ')
        ) as string
      }
      {...props}
    />
  );
};

const Block: FC = function Block(props) {
  return <div className='rcx-message-block' {...props} />;
};

export const Message: FC<{
  is: BoxProps['is'];
  onClick: BoxProps['onClick'];
  className?: string | string[];
  clickable?: true | false;
}> & {
  Metrics: FC;
  Container: FC;
  ContainerFixed: FC;
  AvatarContainer: FC;
  Header: FC;
  Body: FC;
  Block: FC;
  Timestamp: FC<{ children: string }>;
  Name: FC<{ children: string }>;
  Role: FC<{ children: string }>;
  Roles: FC<{ children: string }>;
} = function Message({ is: Tag = 'div', className, clickable, ...props }) {
  return (
    <Tag
      className={prependClassName(
        useArrayLikeClassNameProp({ className }).className,
        [
          'rcx-message',
          (clickable || props.onClick) && 'rcx-message--clickable',
        ]
          .filter(Boolean)
          .join(' ')
      )}
      {...props}
    />
  );
};

const Timestamp: FC<{ children: string }> = function Timestamp(props) {
  return <span className='rcx-message-header__time' {...props} />;
};

const Name: FC<{ children: string }> = function Name(props) {
  return <span className='rcx-message-header__name' {...props} />;
};

const Role: FC<{ children: string }> = function Role(props) {
  return (
    <Tag
      onClick={() => {}}
      className='rcx-message-header__role'
      {...props}
      disabled
      small
      medium={null}
    />
  );
};

const Roles: FC = function Role(props) {
  return <div className='rcx-message-header__roles' {...props} />;
};

Message.Metrics = Metrics;
Message.Container = Container;
Message.ContainerFixed = ContainerFixed;
Message.AvatarContainer = AvatarContainer;
Message.Header = Header;
Message.Body = Body;
Message.Block = Block;
Message.Timestamp = Timestamp;
Message.Name = Name;
Message.Role = Role;
Message.Roles = Roles;
